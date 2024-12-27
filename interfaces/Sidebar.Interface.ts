export interface MenuItemInterface {
    title?: string;
    icon?: string;
    to?: string;
    children?: MenuItemInterface[];
    condition?: () => boolean;
}