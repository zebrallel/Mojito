import './style.scss';
import * as React from 'react';
import { Route, Link } from 'react-router-dom';

class SubRouter extends React.Component {
    render() {
        const { match } = this.props;

        return (
            <div id="SubRouter">
                <p>SubRouter page</p>
                <div>
                    <Link to={`${match.url}/a`}>sub page A</Link>
                </div>
                <div>
                    <Link to={`${match.url}/b`}>sub page B</Link>
                </div>
                <Route
                    path={`${match.url}/:pageName`}
                    component={({ match }) => {
                        return <div>this is page : {match.params.pageName}</div>;
                    }}
                />
            </div>
        );
    }
}

export default SubRouter;
