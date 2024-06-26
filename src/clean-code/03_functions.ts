interface Movie {
    title: string;
    description: string;
    rating: number;
    cast: string[];
}


(() => {

    function getMovieById(id: string) {
        console.log({ movieId: id });
    }

    function getMovieCastById(id: string) {
        console.log({ id });
    }

    function getActorBioById(id: string) {
        console.log({ id });
    }

    function createMovie(movie: Movie) {
        console.log(movie);
    }


    function checkFullName(fullName: string) {
        console.log({ fullName });
        return true;
    }

    function createActor(fullName: string, birthdate: Date): boolean {

        // tarea asincrona para verificar nombre
        checkFullName(fullName);

        if (fullName === 'fernando') return false;

        console.log('Crear actor');
        return true;
    }

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
        if (isDead) return 1500;

        if (isSeparated) return 2500;
        
        return (isRetired) ? 3000 : 4000;
    }
})();