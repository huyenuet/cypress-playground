import { HeroComponent } from "../components/HeroComponent";

export class SRHomePage {
    get heroComponent() {
        return new HeroComponent(cy.get(HeroComponent.CONTAINER_SEL))
    }
}