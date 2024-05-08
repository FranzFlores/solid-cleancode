(() => {

    // No aplica el principio de responsabilidad única
    type Gender = 'M' | 'F';

    class Person {
        // Forma larga
        // public name: string;
        // public gender: Gender;
        // public birthday: Date;

        // constructor(name: string, gender: Gender, birthday: Date) {
        //     this.name = name;
        //     this.gender = gender;
        //     this.birthday = birthday;
        // }

        // Forma corta
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ) { }
    }

    const newPerson = new Person('Franz', 'M', new Date('1998-07-21'))

    class User extends Person {
        public lastAccess: Date;
        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(name, gender, birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(email, role, name, gender, birthdate);
        }
    }

    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'franz@gmail.com',
        'admin',
        'Franz',
        'M',
        new Date('1998/07/21')
    );



})();