// src\main\services\ArticleService.ts
import { Repository } from 'typeorm';
import AppDataSource from '../../main/typeorm.config';
import { Article } from '../db/entities/Article';

export class ArticleService {
    private repository: Repository<Article>;

    constructor() {
        this.repository = AppDataSource.getRepository(Article);
    }

   
    async getAllArticles(): Promise<Article[]> {
        return this.repository.find({
            order: {
                label: 'ASC',  // Adjust the ordering field as needed
            }
        });
    }

   
    async getArticleById(id: number): Promise<Article | undefined | null> {
        const article = await this.repository.findOne({
            where: { id: id }
        })
        console.log('Fetched Articles:', article); // Add logging to check fetched dat
        return article;
    }

    // Create a new Article
    async createArticle(articleData: Partial<Article>): Promise<Article> {
        console.log(`%C Article DTO:`, "background: red; color: white; font-weight: bold", articleData)
        const insertedArticle = await this.repository.save(articleData as Article);
        console.log(`%C Article created:`, "background: blue; color: white; font-weight: bold", insertedArticle)

        // Fetch the fully populated Article including its relations
        return  this.repository.findOne({
            where: {id: insertedArticle.id},
        }) as Promise<Article>
    }

    // Update an existing Article by its ID
    async updateArticle(id: number, articleData: Partial<Article>): Promise<Article | undefined | null> {
        const updateData = { ...articleData }; // Separate related entities from other data
        await this.repository.update(id, updateData);
        return this.getArticleById(id);  // Return the updated Article 
    }

    // Delete an Article by its ID
    async deleteArticle(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}
