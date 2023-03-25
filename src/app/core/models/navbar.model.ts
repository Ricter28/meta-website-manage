export class NavbarModel {
    routeLink!: string;
    icon!: string;
    label!: string;
    public constructor(init?: Partial<NavbarModel>) {
        Object.assign(this, init);
    }
}