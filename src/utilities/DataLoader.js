export const dataLoader = async () => {
    const subjectsData = await fetch('https://openapi.programming-hero.com/api/quiz');
    const subjectsLoad = await subjectsData.json();
    const subjects = subjectsLoad.data
    return {subjects}
} 

