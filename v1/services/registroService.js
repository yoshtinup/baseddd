import {db} from '../../database/mysql.js'

export const registroService = {
    getAllProducts : async () => {
        const sql = "SELECT * FROM registro";
        try {
            const [data] = await db.query(sql, []);
            return data;
        } catch (error) {
            return null;
        }
    },    
    
    getOneProduct : async (id) => {
        const sql = "SELECT * FROM registro WHERE id=?";
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
        const sql = "INSERT INTO registro (nombre, correo, telefono, password) VALUES (?, ?, ?, ?)";
        const params = [product.nombre, product.correo, product.telefono, product.password];
        try {
            const [result] = await db.query(sql, params);
            return {nombre: product.nombre, correo: product.correo, telefono: product.telefono, password: product.password, id: result.insertId}
        } catch (error) {
            return null;
        }
    },
    
    updateOneProduct : async (id, product) => {
        const sql = "UPDATE registro SET nombre = ?, correo = ?, telefono = ?, password = ? WHERE id = ?";
        const params = [product.nombre, product.correo, product.telefono, product.password, id];
        try {
          const [result] = await db.query(sql, params);
          return result;
        } catch (error) {
          return null;
        }
    },
      
    deleteOneProduct : async (id) => {
        const sql = 'DELETE FROM registro WHERE id = ?';
        const params = [id];
        try {
            const result = await db.query(sql, params);
            return result;
        } catch (error) {
            return null;
        }
    }
}