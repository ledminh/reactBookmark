import './style.css';

import { render } from 'react-dom';


function App() {

    return (
        <>
            <header>
                <h1>MY BOOKMARKS</h1>
            </header>
            <main>
                <section>
                    <div className='header'>
                        <div className='title'><h2>SCIENCE</h2></div>
                        <h4>Some interesting science articles that I like</h4>
                    </div>
                    <div className='body'>
                        <article>
                            <div className='ti'>
                                The First Picture of the Black Hole at the Milky Way’s Heart Has Been Revealed
                            </div>
                            <div className='description'>The historic image of Sagittarius A* is the culmination of a decades-long astronomical quest&amp;mdash;and a crucial step toward a new understanding of black holes, gravity and spacetime</div>
                            <div className='note'>Adipisicing fugiat quis officia id irure aliquip. Officia nostrud ipsum aliquip sunt. Consequat labore in et dolor esse incididunt laboris velit elit.</div>
                        </article>
                    </div>
                </section>
                <section>
                    <div className='title'>
                        <h2>SCIENCE</h2>
                        <h4>Some interesting science articles that I like</h4>
                    </div>
                    <div className='body'>
                        <article>
                            <div className='title'>
                                The First Picture of the Black Hole at the Milky Way’s Heart Has Been Revealed
                            </div>
                            <div className='description'>The historic image of Sagittarius A* is the culmination of a decades-long astronomical quest&amp;mdash;and a crucial step toward a new understanding of black holes, gravity and spacetime</div>
                            <div className='note'>Adipisicing fugiat quis officia id irure aliquip. Officia nostrud ipsum aliquip sunt. Consequat labore in et dolor esse incididunt laboris velit elit.</div>
                        </article>
                    </div>
                </section>
                <section>
                    <div className='title'>
                        <h2>SCIENCE</h2>
                        <h4>Some interesting science articles that I like</h4>
                    </div>
                    <div className='body'>
                        <article>
                            <div className='title'>
                                The First Picture of the Black Hole at the Milky Way’s Heart Has Been Revealed
                            </div>
                            <div className='description'>The historic image of Sagittarius A* is the culmination of a decades-long astronomical quest&amp;mdash;and a crucial step toward a new understanding of black holes, gravity and spacetime</div>
                            <div className='note'>Adipisicing fugiat quis officia id irure aliquip. Officia nostrud ipsum aliquip sunt. Consequat labore in et dolor esse incididunt laboris velit elit.</div>
                        </article>
                    </div>
                </section>
                <section>
                    <div className='title'>
                        <h2>SCIENCE</h2>
                        <h4>Some interesting science articles that I like</h4>
                    </div>
                    <div className='body'>
                        <article>
                            <div className='title'>
                                The First Picture of the Black Hole at the Milky Way’s Heart Has Been Revealed
                            </div>
                            <div className='description'>The historic image of Sagittarius A* is the culmination of a decades-long astronomical quest&amp;mdash;and a crucial step toward a new understanding of black holes, gravity and spacetime</div>
                            <div className='note'>Adipisicing fugiat quis officia id irure aliquip. Officia nostrud ipsum aliquip sunt. Consequat labore in et dolor esse incididunt laboris velit elit.</div>
                        </article>
                    </div>
                </section>
                <section>
                    <div className='title'>
                        <h2>SCIENCE</h2>
                        <h4>Some interesting science articles that I like</h4>
                    </div>
                    <div className='body'>
                        <article>
                            <div className='title'>
                                The First Picture of the Black Hole at the Milky Way’s Heart Has Been Revealed
                            </div>
                            <div className='description'>The historic image of Sagittarius A* is the culmination of a decades-long astronomical quest&amp;mdash;and a crucial step toward a new understanding of black holes, gravity and spacetime</div>
                            <div className='note'>Adipisicing fugiat quis officia id irure aliquip. Officia nostrud ipsum aliquip sunt. Consequat labore in et dolor esse incididunt laboris velit elit.</div>
                        </article>
                    </div>
                </section>
            </main>
        </>
    )
}


render(<App />, document.querySelector("#container"));