let nom: string = "mot";
let age: number = 22;
let etudiant: boolean = true;

//fonction typees
function somme(a: number, b: number): number {
    return a + b;
}

console.log("Somme =", somme(4, 6));


//interface etudiant
interface Etudiant {
    id: number;
    nom: string;
    prenom: string;
    age: number;
}

//classe etudiant 
class EtudiantImpl implements Etudiant {
    constructor(
        public id: number,
        public nom: string,
        public prenom: string,
        public age: number
    ) {}

    afficher(): void {
        console.log(`${this.nom} ${this.prenom}, ${this.age} ans`);
    }
}

const e = new EtudiantImpl(1, "Bchini", "Seif", 22);
e.afficher();


//partie 5
//generique
function makeArray<T>(value: T): T[] {
    return [value, value];
}

console.log(makeArray<number>(5));
console.log(makeArray<string>("Hello"));

//union types
function afficherId(id: number | string, prefixe?: string) {
    console.log(prefixe ? `${prefixe} ${id}` : id);
}

afficherId(10);
afficherId("ABC", "ID");


//enum
enum Role {
    Admin,
    User,
    Guest
}

let r: Role = Role.Admin;
console.log(r);

//compilation:
//tsc exercices-typescript.ts
//node exercices-typescript.js


