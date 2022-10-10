export const dataLoader = async () => {
    const subjectsData = await fetch('https://openapi.programming-hero.com/api/quiz');
    const subjectsLoad = await subjectsData.json();
    const subjects = subjectsLoad.data
    return {subjects}
} 

export const dataLoaderWithParam = async ({params}) => {
    const testData = await fetch(`https://openapi.programming-hero.com/api/quiz/${params.subjectsId}`);
    const testLoadData = await testData.json();
    const tests = testLoadData
    return {tests}
} 