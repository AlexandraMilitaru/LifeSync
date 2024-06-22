import util from "util";
import asyncHandler from "express-async-handler";
import GeneratorService from "../../services/generator-service";
import { Severity } from "../../enums/severity-enum";

class GeneratorController {
    private generatorService: GeneratorService;

    constructor(generatorService: GeneratorService) {
        this.generatorService = generatorService;
    }

    generateAll = asyncHandler(async (_req, res) => {
        await this.generatorService.generateAll();
        res.status(201).json({
            message: "All data has been generated",
            severity: Severity.Success
        });
    })

    generateAdmins = asyncHandler(async (_req, res) => {
        const count = await this.generatorService.generateAdmins();
        res.status(201).json({
            message: util.format("Successfully generated %d admins", count),
            severity: Severity.Success
        });
    })

    generateCategories = asyncHandler(async (_req, res) => {
        const count = await this.generatorService.generateCategories();
        res.status(201).json({
            message: util.format("Successfully generated %d categories", count),
            severity: Severity.Success
        });
    })
}

export default GeneratorController;