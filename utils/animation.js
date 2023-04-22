export const videoAnimation = {
    initial: {
        y: 100,
        scale: 0.8,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            ease: [0.6, 0.01, 0.05, 0.95],
            duration: 1.2,
             delay:0.7
        }
    },
}

export const margin = {
    initial :{
        marginTop : "0px",
    },
    animate:{
        marginTop : "20px",

    }

    
}

export const line = {
    initial: {
        y: 0,
        opacity: 0,
        
    },
    animate: {
        y: -50,
        opacity: 1,
        transition: {
            duration: 1,
            
        }
    }
}
export const mask = {
    // initial: {
    //    display:"grid"
    // },
    // animate: {
    //    display:"none"
    // }
}