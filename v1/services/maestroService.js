import {db} from '../../database/mysql.js'

export const MaestroService = {
    getAllProducts : async () => {
        const sql = "SELECT * FROM maestros";
        try {
            const [data] = await db.query(sql, []);
            return data;
        } catch (error) {
            return null;
        }
    },    
    
    getOneProduct : async (id) => {
        const sql = "SELECT * FROM maestros WHERE id=?";
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
        const sql = "INSERT INTO maestros (name, matricula, gmail, tipo, edad) VALUES (?, ?, ?, ?, ?)";
        const params = [product.name, product.matricula, product.gmail, product.tipo, product.edad];
        try {
            const [result] = await db.query(sql, params);
            return {name: product.name, gmail: product.gmail, tipo: product.tipo, edad: product.edad, id: result.insertId}
        } catch (error) {
            return null;
        }
    },
    
    updateOneProduct : async (id, product) => {
        const sql = "UPDATE maestros SET name = ?, matricula = ?, gmail = ?, tipo = ?, edad = ? WHERE id = ?";
        const params = [product.name, product.matricula, product.gmail, product.tipo, product.edad, id];
        try {
          const [result] = await db.query(sql, params);
          return result.affectedRows > 0 ? { id, ...product} : null;

        } catch (error) {
          return null;
        }
    },
      
    deleteOneProduct : async (id) => {
        const sql = 'DELETE FROM maestros WHERE id = ?';
        const params = [id];
        try {
            const result = await db.query(sql, params);
            return result;
        } catch (error) {
            return null;
        }
    }
}