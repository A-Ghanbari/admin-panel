import React from "react";
import "components/error/error.scss"
export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo,
        });
        console.log('error', error);
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <div className="error-boundary">
                    <div className="error-boundary-img">
                        <div className="error-boundary-img1"/>
                        <div className="error-boundary-img2"/>
                        <div className="error-boundary-img3"/>
                        <div className="error-boundary-img4"/>
                    </div>
                    <h2>در راه اندازی صفحه مشکلی پیش آمد لطفا دوباره تلاش کنید!</h2>
                </div>
            );
        }
        return this.props.children;
    }
}