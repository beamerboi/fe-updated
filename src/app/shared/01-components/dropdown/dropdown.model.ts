interface ItemsModel {
    label: string;
    url: string;
    icon?: string;
}

export interface DropdownModel{
    image? : string;
    name?: string;
    items: ItemsModel[];
}