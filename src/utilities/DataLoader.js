export const dataLoader = async () => {
    const subjectsData = await fetch('https://openapi.programming-hero.com/api/quiz');
    const subjects = await subjectsData.json();

    return {subjects}
} 

