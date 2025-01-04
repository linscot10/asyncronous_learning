const preHeatOven = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const preHeatOven = false;


            if (preHeatOven) {
                resolve("Preheat Oven to 180deg")
            }
            else {
                reject("failed task one")
            }
        }, 1000)
    })
};

const addSugarAndChocoChips = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const addchoco = true;


            if (addchoco) {
                resolve("Place butter and choco chips heat untill melted and smooth")
            }
            else {
                reject("failed task")
            }
        }, 1000)
    })
};


const addFlourCocoaAndSalt = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const addSaltFlour = true;


            if (addSaltFlour) {
                resolve("add salt flour and salt and stir until smooth")
            }
            else {
                reject("failed task")
            }
        }, 1000)
    })
};


const bakeMixture = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const bakeMixture = true;


            if (bakeMixture) {
                resolve("bake mixture for 24 mins")
            }
            else {
                reject("failed task")
            }
        }, 1000)
    })
};


const bakeChocolateBrownies = async () => {

    try {
        const taskOne = await preHeatOven();
        console.log(taskOne)
        const taskTwo = await addSugarAndChocoChips();
        console.log(taskTwo)
        const taskThree = await addFlourCocoaAndSalt();
        console.log(taskThree)
        const taskFour = await bakeMixture();
        console.log(taskFour)

    } catch (error) {
        console.log(error)
    }

}

bakeChocolateBrownies()