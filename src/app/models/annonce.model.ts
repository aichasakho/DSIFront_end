interface Annonce {
  bienImmobilier: {
    image: string;
  };
  type_annonce: string;
  description: string;
  isExpanded?: boolean; // Ce champ est ajouté dynamiquement
}
