import { StatesService } from "../core/service/states.service";
import { DiContainerService } from "../core/service/di-container.service";

export class StatesController {
    private statesService: StatesService;

    constructor() {
        const container = new DiContainerService();
        this.statesService = container.get('StatesService') as any;
    }

    // /monsters
    saveBonusMonster(monsterId: number): void {
        this.statesService.save({id: monsterId});
    }
}
