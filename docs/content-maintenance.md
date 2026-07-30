# 內容維護方式

## 新增知識專欄

文章列表、SEO 與 Sitemap 共同讀取 `data/blog-posts.ts`。新增一筆 `BLOG_POSTS` 後，網址會是 `/blog/{slug}`；一般文章可直接填入 `content`，以 `### ` 開頭的段落會顯示為小標題。

新增文章時必須填寫作者與真實日期；相關產品、案例連結則依文章內容選填：

```ts
author: "作者或團隊名稱"
publishedAt: "YYYY-MM-DD"
updatedAt: "YYYY-MM-DD"
relatedProductIds: ["small"]
relatedCaseIds: ["案例 id"]
```

作者與日期會顯示於文章頁首，並同步輸出到 Article 結構化資料。修改文章內容時只更新 `updatedAt`，不要更改原始 `publishedAt`。

## 新增案例與圖片

四類案例資料集中在 `data/equipment/`：

- `small-cases.ts`
- `large.ts`
- `wall.ts`
- `custom.ts`

新增案例時填入商鋪名稱、地點、商品類別、圖片清單與現有 Caption。原圖放在 `public/images/gallery/`，縮圖放在 `public/images/gallery-thumbnails/`；圖片 Sitemap 會從上述案例資料自動收錄原圖。

每張圖片的 alt 集中在 `data/equipment/case-image-alts.ts`，以案例編號對應畫面描述。新增案例時，請依以下順序提供真實資訊：

```text
商鋪名稱＋商品類別＋酒柱或設備形式＋畫面中的設備
```

例如：`BMW汽車展示中心接待所吧檯安裝兩支原色雅士酒塔與滴酒盤`。不要只寫「主視覺」或「另一角度」，也不要推測照片中無法確認的設備或場景。

案例 Caption 已完成整理。新增或調整公開 Caption 前，應先由內容負責人確認，不以程式自動改寫。

## 社群分享圖片

- 一般頁面共用固定的 1200 × 630 品牌分享圖。
- 專欄文章由 `app/blog/[slug]/opengraph-image.tsx` 與 `twitter-image.tsx` 依文章主圖、分類與標題產生 1200 × 630 分享圖。
- 新文章只需維護 `data/blog-posts.ts` 的主圖與文字，不需要另外輸出社群圖片檔案。
