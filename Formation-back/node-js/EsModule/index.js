async function main() {
    const { fizzBuzzFor } = await import ('./buzzLightYear.mjs')
    fizzBuzzFor(100);
}

main();