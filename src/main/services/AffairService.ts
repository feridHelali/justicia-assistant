// src\main\services\AffairService.ts
import { Repository } from 'typeorm';
import AppDataSource from '../../main/typeorm.config';
import { Affair } from '../db/entities/Affair';

export class AffairService {
    private repository: Repository<Affair>;

    constructor() {
        this.repository = AppDataSource.getRepository(Affair);
    }

   
    async getAllAffairs(): Promise<Affair[]> {
        return this.repository.find({
            order: {
                affairId: 'ASC',  // Adjust the ordering field as needed
            },
            relations: [
                
            ],
        });
    }

   
    async getAffairById(id: number): Promise<Affair | undefined | null> {
        const affair = await this.repository.findOne({
            where: { affairId: id },
            relations: []
        })
        console.log('Fetched affair:', affair); // Add logging to check fetched dat
        return affair;
    }

    // Create a new Affair
    async createAffair(affairData: Partial<Affair>): Promise<Affair> {
        console.log(`%C Affair DTO:`, "background: red; color: white; font-weight: bold", affairData)
        const insertedAffair = await this.repository.save(affairData as Affair);
        console.log(`%C Affair created:`, "background: blue; color: white; font-weight: bold", insertedAffair)

        // Fetch the fully populated Affair including its relations
        return  this.repository.findOne({
            where: {affairId: insertedAffair.affairId},
            relations: []
        }) as Promise<Affair>
    }

    // Update an existing Affair by its ID
    async updateAffair(id: number, affairData: Partial<Affair>): Promise<Affair | undefined | null> {
        const updateData = { ...affairData }; // Separate related entities from other data
        await this.repository.update(id, updateData);
        return this.getAffairById(id);  // Return the updated Affair with relations
    }

    // Delete an Affair by its ID
    async deleteAffair(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}
