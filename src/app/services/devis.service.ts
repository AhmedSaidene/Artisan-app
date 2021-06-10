import { Injectable } from '@angular/core';
import { ClientService } from './client.service';
import { DevisHasProduitsService } from './devis-has-produits.service';
import { GroupeLignesService } from './groupe-lignes.service';
import { HttpService } from './http.service';
import { ModelDevisService } from './model-devis.service';
import { StorageService } from './storage.service';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class DevisService {


  clientId = {};
  modelDevis = {};
  produits = [];
  entrepriseId: {};
  prestation : {};
  intervention : {};
  traveaux : {};
  iban : {};


  constructor(private httpService: HttpService,
              private storage: StorageService,
              private clientService: ClientService,
              private modelDevisService: ModelDevisService,
              private groupeLignesService: GroupeLignesService,
              private devisHasProduitsService: DevisHasProduitsService,
              private toastService: ToastService) 
{
    this.storage.get('entreprise_id').then((val) => {
      this.entrepriseId = val;            
    });
}

  get() {
    return this.httpService.get('devis/' , this.entrepriseId);
 }

  post(postData: any) {
    console.log(postData);
    const c = postData;
    //Puisque on a deux possibilité: soit de choisir un client existant donc on prend sont id
    //soit de créer un 
    //le cas de choisir un client existant : le client est in nombre
if(typeof(c.client) === 'number') {
  this.clientId = postData.client;
  console.log(this.clientId);
  //larecupération du model de devis de l'entreprise
  this.modelDevisService.get().subscribe((modelDevis) => {
    this.modelDevis = modelDevis['data']['id'];
    this.iban = modelDevis['data']['IBAN'];
    console.log(modelDevis)
    console.log(this.modelDevis)
    //la création du document 'devis' avec l'id du client, le model de devis
    let devis = {
       type: "devis",
       IBAN: modelDevis['data'][0]['IBAN'],
       client_id: this.clientId,
       intervention_id: postData['intervention'],
       type_traveaux_id: postData['prestation'],
       type_prestation_id: postData['traveaux'],
       modelDevis_id: modelDevis['data'][0]['id']
    }
    this.httpService.post('documents',devis).subscribe((devis) => {
     console.log(devis);
     if(devis['success'] == true)
     { //si le devis contient des produits alors on fait la création 
       //du groupe des lignes de produits
       //puis on fait la création des devis_produits avec l'id du groupe de lignes 
        if(postData.produits.length != 0)
        { this.groupeLignesService.post({documentId : devis['data']['id']}).subscribe(groupe => {
          const groupeId = groupe['data']['id'];
          console.log(groupe);
          console.log(groupeId);
         for (let produit of postData.produits) {
            this.devisHasProduitsService.post(
              {groupe_ligne_doc_id : groupeId,
               produits_id : produit.produit_id,
               prix_par_achat : produit.prix_par_achat,
               prix_par_vente_unitaire : produit.prix_par_vente_unitaire,
               prix_par_total_HT : 11,
               quantite : produit.quantite,
               tva : produit.tva,
               reference: produit.reference,
               description: produit.desc }
              ).subscribe((devis_has_prod) => {
                console.log(devis_has_prod);
              });
          } 
          this.toastService.presentToast('Creation de devis avec success !');
        })
        }
        else {
          this.toastService.presentToast('Creation de devis avec success !');
        }
     } else {
     }
   });
    
  })

} else {
  this.clientService.post(postData.client).subscribe((data) => {
    //this.entrepriseId = postData.client.entrepriseId
    if(data['success'] == true)
   {  
     this.clientId = data['data']['id'];
     console.log(this.clientId);
   //larecupération du model de devis de l'entreprise
   this.modelDevisService.get().subscribe((modelDevis) => {
     this.modelDevis = modelDevis['data']['id'];
     this.iban = modelDevis['data']['IBAN'];
     console.log(modelDevis)
     console.log(this.modelDevis)
     //la création du document 'devis' avec l'id du client, le model de devis
     let devis = {
        type: "devis",
        IBAN: modelDevis['data'][0]['IBAN'],
        client_id: this.clientId,
        intervention_id: postData['intervention'],
        type_traveaux_id: postData['prestation'],
        type_prestation_id: postData['traveaux'],
        modelDevis_id: modelDevis['data'][0]['id']
     }
     this.httpService.post('documents',devis).subscribe((devis) => {
      console.log(devis);
      if(devis['success'] == true)
      { //si le devis contient des produits alors on fait la création 
        //du groupe des lignes de produits
        //puis on fait la création des devis_produits avec l'id du groupe de lignes 
         if(postData.produits.length != 0)
         { this.groupeLignesService.post({documentId : devis['data']['id']}).subscribe(groupe => {
           const groupeId = groupe['data']['id'];
           console.log(groupe);
           console.log(groupeId);
          for (let produit of postData.produits) {
             this.devisHasProduitsService.post(
               {groupe_ligne_doc_id : groupeId,
                produits_id : produit.produit_id,
                prix_par_achat : produit.prix_par_achat,
                prix_par_vente_unitaire : produit.prix_par_vente_unitaire,
                prix_par_total_HT : 11,
                quantite : produit.quantite,
                tva : produit.tva,
                reference: produit.reference,
                description: produit.desc }
               ).subscribe((devis_has_prod) => {
                 console.log(devis_has_prod);
                 return true;
               });
               this.toastService.presentToast('Creation de devis avec success !');
           } 
         })

         }
      } else {
        this.toastService.presentToast('Creation de devis avec success !');
      }
    });
     
   })
    
  } else {
    
  }
  });
}

    
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
     }

     create(postData: any) {
       //loader 
//la création du client pour récupérer son id
if(postData['client']['existe']) {
  this.httpService.post('documents', postData['document']).subscribe((devis) => {
  if(devis['success']) {
    console.log(devis)
    postData['interventions'].forEach(intervention => {
      intervention['documentId'] = devis['id']
      this.groupeLignesService.post(intervention).subscribe((grp) => {
        console.log(grp)
        if(grp['success']) {
          intervention['produits'].forEach(produit => {
            produit['groupe_ligne_doc_id'] = grp['id']
        this.devisHasProduitsService.post(produit).subscribe((ligne) => {
          console.log(ligne)
        })
      });
     
        } else {
         this.toastService.presentToast("Echec d'envoie")
        }
      })
   
    });
 
  } else {
    this.toastService.presentToast("Echec d'envoie")
  } });
}




      
  //});
       }
}
