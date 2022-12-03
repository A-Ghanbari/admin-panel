import React from 'react'
import "components/notFound/notFound.scss"

export function NotFound() {
    return (
        <div className='not-found'>
            <h1> خطا !  </h1>
            <h2 className="zoom-area">صفحه مورد نظر یافت نشد </h2>
            <section className="error-container">
                <span className="four" />
                <span className="zero" />
                <span className="four" />
            </section>
        </div>
    )
}