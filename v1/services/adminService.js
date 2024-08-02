import {db} from '../../database/mysql.js'

export const AdminService = {
    getAllProducts : async () => {
        const sql = "SELECT * FROM administrador";
        try {
            const [data] = await db.query(sql, []);
            return data;
        } catch (error) {
            return null;
        }
    },    
    
    getOneProduct : async (id) => {
        const sql = "SELECT * FROM administrador WHERE id=?";
        const params = [id];
        try {
            const [result] = await db.query(sql, params);
            return result[0];
        } catch (error) {
            console.log("E")
            return null;
        }
    },
     
    createNewProduct : async (product) => {
        const sql = "INSERT INTO administrador (name, matricula, gmail) VALUES (?, ?, ?)";
        const params = [product.name, product.matricula, product.gmail];
        try {
            const [result] = await db.query(sql, params);
            return {name: product.name, matricula: product.matricula, gmail: product.gmail, id: result.insertId}
        } catch (error) {
            return null;
        }
    },

    updateOneProduct: async (id, updatedProduct) => {
        const sql = "UPDATE administrador SET name = ?, matricula = ?, gmail = ? WHERE id = ?";
        const params = [updatedProduct.name, updatedProduct.matricula, updatedProduct.gmail, id];
        try {
            const [result] = await db.query(sql, params);
            return result.affectedRows > 0 ? { id, ...updatedProduct } : null;
        } catch (error) {
            return null;
        }
    },
    
    deleteOneProduct : async (id) => {
        const sql = 'DELETE FROM administrador WHERE id = ?';
        const params = [id];
        try {
            const result = await db.query(sql, params);
            return result;
        } catch (error) {
            return null;
        }
    }
}