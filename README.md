# :earth_africa: África.js
África is a fulfilled ORM and query builder that runs over SQL Server, SQLite, MySQL, MariaDB and PostgreSQL.

## CLI

To install the CLI, you need to run on your bash:
```bash
$ npm install -g africa.js
```

### Init

The ```init``` command, starts the CLI creating a ***.env*** file and the folders for migrations and seeds. You can change it after the .env file is created.

```bash
$ africa init <database_client> <host> <user> <password> <database_name>
```

Or, if you already have a ***.env*** file, you can just run:
```bash
$ africa init
```

### The ```.env``` file

Heres a example of how the ***.env*** file show be like:

```
AFRICA_MIGRATIONS='migrations/'
AFRICA_SEEDS='seeds/'

DB_CLIENT='mysql|mariadb|postgresql|sqlite|sqlserver'
DB_HOST='localhost'
DB_USER='root'
DB_PASS=''
DB_NAME='africa'
```

### Create Migration

To create a migration, you need to run:

```bash
$ africa create-migration example_migration
'20010911_084600-example_migration' migration file created with success!
```

### Create Seeder

To create a seeder, you can run:

```bash
$ africa create-seeder example_seed
'20010911_101010-example_seed' seed file created with success!
```

### Migrate

To run the migrations in the folder, you need to run:
```bash
$ africa migrate
```

### Seed

To run the seeders in the folder, you need to run:
```bash
$ africa seed
```

### Rollback

To rollback the migrations (in the database), you can run:
```bash
$ africa rollback
```

## The API

The API follows the SQL syntax, so we get the same API methods for every database client.

Lets start with the connection over a MySQL client as a example:

```javascript
import { Africa, MariaDB, MySQL, PostgreSQL, SQLite, SQLServer } from 'africa.js';

const mysql = new MySQL('host', 'user', 'password', 'database');
const mariadb = new MariaDB('host', 'user', 'password', 'database');
const postgre = new PostgreSQL('host', 'user', 'password', 'database');
const sqlserver = new SQLServer('host', 'user', 'password', 'database');
const sqlite = new SQLite('path/to/database_filename');
```

## Queries Avaiable

Create a new table:
```javascript
  await mysql
    .create('table_name', {
      'id': new Africa().int().null(false).primary_key().auto_increment().value,
      'name': new Africa().varchar(255).null(false).value,
      'age': new Africa().varchar(255).null(false).value,
      'email': new Africa().varchar(255).null(false).value
    }).query();
```

Read table from database:
```javascript
  let query = await mysql
    .select() // default brings all records
    .from('table_name')
    .query();
```

Insert into table:
```javascript
  await mysql
    .insert('table_name',
      {
        name: 'John Doe',
        age: 21,
        email: 'john@doe.com'
      }
    )
    .query();
```

Update record in a table:
```javascript
  await mysql
    .update('table_name', {
      name: 'Jane Doe'
    })
    .where('name', '=', 'John Doe')
    .query();
```

Delete in table:
```javascript
  await mysql
    .delete('table_name')
    .cascade()
    .query();
```

Read table from database with clausules:
```javascript
  let query = await mysql
    .select('id, name')
    .from('table_name')
    .where('collumn', 'operator', 'value')
    .query();
```

Read table from database with order by clausules:
```javascript
  let query = await mysql
    .select('id, name')
    .from('table_name')
    .where('collumn', 'operator', 'value')
    .order_by('collumn')
    .desc()
    .query();
```

Read table from database with INNER JOIN:
```javascript
  let query = await mysql
    .select('id, name')
    .from('table_name')
    .join('table2', {
      foo: 'bar'
    })
    .query();
```

Read table from database with LEFT JOIN:
```javascript
  let query = await mysql
    .select('id, name')
    .from('table_name')
    .left_join('table2', {
      foo: 'bar'
    })
    .query();
```

Read table from database with RIGHT JOIN:
```javascript
  let query = await mysql
    .select('id, name')
    .from('table_name')
    .right_join('table2', {
      foo: 'bar'
    })
    .query();
```

Read table from database with OUTER FULL JOIN:
```javascript
  let query = await mysql
    .select('id, name')
    .from('table_name')
    .outer_join('table2', {
      foo: 'bar'
    })
    .query();
```

RAW SQL:
```javascript
  let query = await mysql
    .raw('SELECT * FROM table_name')
    .query();
```

## COPYRIGHT

MIT License.

**Made with :hearts: by John.**
