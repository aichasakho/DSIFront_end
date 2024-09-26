interface Annonce {
  bienImmobilier: {
    image: string;
  };
  type_annonce: 'location' | 'vente';    //string;
  description: string;
  type_bien_id: number;
  isExpanded?: boolean; // Ce champ est ajouté dynamiquement
}
