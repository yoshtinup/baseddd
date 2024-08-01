import {db} from '../../database/mysql.js'

export const alumnoService = {
    
    getAllProducts : async () => {
        const sql = "SELECT * FROM alumnos";
        try {
            const [data] = await db.query(sql, []);
            return data;
        } catch (error) {
            return null;
        }
    },    
    
    getOneProduct : async (id) => {
        const sql = "SELECT * FROM alumnos WHERE id=?";
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
        const sql = "INSERT INTO alumnos (name, email, matricula, grado, c1, c2, c3) VALUES (?, ?, ?, ?, ?, ?, ?)";
        const params = [product.name, product.email, product.matricula, product.grado, product.c1, product.c2, product.c3];
        try {
            const [result] = await db.query(sql, params);
            return {id: result.insertId, name: product.name, email: product.email, matricula: product.matricula, grado: product.grado, c1: product.c1, c2: product.c2, c3: product.c3}
        } catch (error) {
            return null;
        }
    },

    updateOneProduct: async (id, updatedProduct) => {
        const sql = "UPDATE producto SET nombreproduct = ?, cantidad = ?, costo = ?, descripcion = ? WHERE id = ?";
        const params = [updatedProduct.nombreproduct, updatedProduct.cantidad, updatedProduct.costo, updatedProduct.descripcion, id];
        try {
            const [result] = await db.query(sql, params);
            return result.affectedRows > 0 ? { id, ...updatedProduct } : null;
        } catch (error) {
            return null;
        }
    },
    
    deleteOneProduct : async (id) => {
        const sql = 'DELETE FROM producto WHERE id = ?';
        const params = [id];
        try {
            const result = await db.query(sql, params);
            return result;
        } catch (error) {
            return null;
        }
    }
}