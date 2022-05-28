import React from 'react';
import '../App.css'

function TopMenu({previous, next, dis,disPlus}) {
    return (
        <div className="topMenu">
            <br/>
            <span>
                <button
                    type="button"
                    disabled={dis}
                    name="previous"
                    onClick={previous}
                >Previous</button>
                <button
                    type="button"
                    disabled={disPlus}
                    name="next"
                    onClick={next}
                >Next</button>
            </span>
        </div>
    );
}

export default TopMenu;