import React from 'react'

const Lecture_2 = () => {

    const ishandle = (a) => {
        if (a % 2 == 0) {
            return (
                <>
                    <h1>Condition 1 {a}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus placeat deserunt laboriosam dicta pariatur aliquid quaerat excepturi atque suscipit porro natus sequi consequatur, adipisci illo vitae! A natus dolor rerum!</p>
                </>
            )
        } else {
            return (
                <>
                    <h1>Condition {a} 2</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus placeat deserunt laboriosam dicta pariatur aliquid quaerat excepturi atque suscipit porro natus sequi consequatur, adipisci illo vitae! A natus dolor rerum!</p>
                </>
            )
        }
    }


    return (
        <div>
            {/* {11%2==0?
        <>
            <h1>Condition 1</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus placeat deserunt laboriosam dicta pariatur aliquid quaerat excepturi atque suscipit porro natus sequi consequatur, adipisci illo vitae! A natus dolor rerum!</p>
        </>
        :
        <>
            <h1>Condition 2</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero suscipit eum maxime placeat, vitae consequatur quo possimus harum quia? Unde voluptatibus reiciendis quam voluptate delectus tempora assumenda molestiae quibusdam beatae?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nihil, minima iure facilis temporibus sapiente modi quo et similique ad natus provident esse aliquid quod dolorum aspernatur eaque a saepe!</p>
            <button>Read More</button>
        </>} */}

            {ishandle(23)}
        </div>
    )
}

export default Lecture_2