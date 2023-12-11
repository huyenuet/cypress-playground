import { HeroComponent } from "../components/simply_recipes/HeroComponent";

export class SRHomePage {
    heroComponent() {
        return new HeroComponent(cy.get(HeroComponent.CONTAINER_SEL))
    }
}