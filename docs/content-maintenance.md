# 內容維護方式

## 新增知識專欄

文章列表、SEO 與 Sitemap 共同讀取 `data/blog-posts.ts`。新增一筆 `BLOG_POSTS` 後，網址會是 `/blog/{slug}`；一般文章可直接填入 `content`，以 `### ` 開頭的段落會顯示為小標題。

建議日後由你確認後再增加以下真實資料：

```ts
author: "作者或團隊名稱"
publishedAt: "YYYY-MM-DD"
updatedAt: "YYYY-MM-DD"
relatedProductIds: ["small"]
relatedCaseIds: ["案例 id"]
```

顯示位置建議：作者與日期放在文章標題下方；相關產品與案例放在內文結束、NEXT STEP 之前。未提供真實資料前，不應輸出到畫面或 Article 結構化資料。

## 新增案例與圖片

四類案例資料集中在 `data/equipment/`：

- `small-cases.ts`
- `large.ts`
- `wall.ts`
- `custom.ts`

新增案例時填入商鋪名稱、地點、商品類別、圖片清單與現有 Caption。原圖放在 `public/images/gallery/`，縮圖放在 `public/images/gallery-thumbnails/`；圖片 Sitemap 會從上述案例資料自動收錄原圖。

每張圖片的 alt 請由你提供，至少包含：

```text
檔名｜畫面中的設備｜設備所在位置｜可辨識的現場特徵
```

例如格式為：`檔名｜幾口或何種設備｜吧檯、牆面或餐車｜材質、視角或周邊環境`。這只是填寫格式，不代表既有照片內容。

## 社群分享圖片

目前每篇文章直接使用該文章主圖作為 Open Graph 圖片，分享整站時使用首頁主圖。這不增加維護成本，也不需要替每頁製作專用圖；未來若專欄分享量增加，再為文章建立固定的 1200 x 630 社群圖模板即可。
