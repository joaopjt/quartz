import mysql from 'mysql';
import SQL from './_sql-base';

export default class MySQL extends SQL { 
  constructor(host, user, password, database) {
    super();
    this.conn = mysql.createPool({
      host,
      user,
      password,
      database
    });
  }

  query() {
    this.conn.query(this.query_string, function (error, results, fields) {
      if (error) throw error;

      return results;
    });
  }
}