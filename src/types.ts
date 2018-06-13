export interface RootState {
    version: string;
}

// Profile types

// TODO replace User with Menu?
// TODO implement current "interfaces" (class objects) as true interfaces like this
export interface User {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
}

// Interface for an element of the main navigation
export interface Menu {
    title: string; // link.title
    description?: string; // link.description
    weight: number; // link.weight
    parentMenu: string; // link.menu_name
    url?: string; // link.url
    has_children: boolean; // has_children
    subtree?: Menu[]; // subtree
}

// States

export interface MenuTreeState {
    main: Menu[];
    error: boolean;
}

export interface MenuState {
    active: boolean;
    open: boolean;
    error: boolean;
}

export interface ProfileState {
    user?: User;
    error: boolean;
}
