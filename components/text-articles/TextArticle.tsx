import React from "react";
import styles from './text-article.module.scss'

export function TextArticle({}) {
    return <div className={styles["text"]}>
        <div className={styles["article-desc"]}>
            <div className={styles["article-desc__presentation"]}>
                <h1>Asgaard sofa</h1>
                <h2>Rs. 250,000.00</h2>
                <div className={styles['stars']}>
                    <span></span>
                    5 Customer review
                </div>
                <p>Setting the bar as one of the loudest speakers in its class, the Kilburn is a
                    compact, stout-hearted hero with a well-balanced audio which boasts a clear
                    midrange and extended highs for a sound.</p>
            </div>
            <div className={styles['space']}></div>
            <div className={styles["article-desc__size"]}>
                <h4>Size</h4>
                <div className={styles["choices-size"]}>
                    <span className={styles['size-span']}>L</span>
                    <span className={styles['size-span']}>XL</span>
                    <span className={styles['size-span']}>XS</span>
                </div>
            </div>
            <div className={styles['space']}></div>
            <div className={styles['article-desc__color']}>
                <h4>Color</h4>
                <div className={styles['choices-color']}>
                    <span className={styles['size-span']}></span>
                    <span className={styles['size-span']}></span>
                    <span className={styles['size-span']}></span>
                </div>

            </div>
            <div className={styles['space']}></div>

            <div className={styles['article-desc__itms']}>
                <div className={styles['size-span-Items']}>
                    <span>+</span>
                    1
                    <span>-</span>
                </div>
                <div className={styles['size-span-Items']}>
                    Add To Cart
                </div>
                <div className={styles['size-span-Items']}>
                    <span>+</span>
                    <span>Compare</span>
                </div>
            </div>
            <div className={styles['space']}></div>
            <hr/>
            <div className={styles['space']}></div>

            <div className={styles['article-desc__infos']}>
                <div className={styles['grid-infos']}>
                    <div>SKU</div>
                    <div>Category</div>
                    <div>Tags</div>
                    <div>Share</div>
                    <div>: SS001</div>
                    <div>: Sofas</div>
                    <div>: Sofa,Chair,Home,Shop</div>
                    <div>: réseau</div>
                </div>
            </div>
        </div>
    </div>;
}
