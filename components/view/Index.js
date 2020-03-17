import React from 'react';
import {Link} from '../../routes';

const IndexView = () => {

    return (
        <>
            <h1>Welcome to TestPage</h1>
            <nav>
                <ul>
                    <li>
                        <Link route={"/style"}>
                            <a>Style Test</a>
                        </Link>
                    </li>
                    <li>
                        <Link route={"/sign-in"}>
                            <a>Sing-in</a>
                        </Link>
                    </li>
                    <li>
                        <Link route={"/event"}>
                            <a>Event</a>
                        </Link>
                    </li>
                    <li>
                        <Link route={"/tabs"}>
                            <a>Tabs</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>

    )
}

export default IndexView;