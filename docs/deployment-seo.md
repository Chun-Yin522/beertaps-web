# 正式網域、社群分享與 Search Console

## 目前狀態（2026-07-30）

- 正式主網域：`https://beertaps.tw`
- `www.beertaps.tw`：轉址至 `https://beertaps.tw`
- Vercel 顯示兩個網域皆為 `Valid Configuration`
- DNS 由 Cloudflare 管理，目前應維持灰色雲朵（DNS only）
- GitHub `Chun-Yin522/beertaps-web` 的 `main` 已連接 Vercel Production
- 最新正式部署已完成，`beertaps.tw` 回應正常
- Search Console 網域資源已驗證
- `sitemap.xml` 已成功提交並發現 14 個頁面
- `image-sitemap.xml` 已成功提交並發現 4 個案例分類頁面

目前 Cloudflare DNS：

```text
A      @      216.198.79.1
CNAME  www    64af9fe9406ea150.vercel-dns-017.com
```

## 1. 後續正式部署

1. 完成內容檢查與正式建置。
2. 將本機最新版程式碼提交並上傳至 Vercel 連接的 Git 儲存庫 `Chun-Yin522/beertaps-web`。
3. 到 Vercel `Settings > Environment Variables` 的 Production 環境加入或確認：

```text
Key: NEXT_PUBLIC_SITE_URL
Value: https://beertaps.tw
Note: 正式網站網址，用於 canonical、分享圖、Sitemap 與結構化資料
```

4. 重新部署 Production。之後 canonical、Open Graph、結構化資料、一般 Sitemap 與圖片 Sitemap 都會使用正式網域。
5. 確認 `www.beertaps.tw` 永久轉址至 `beertaps.tw`。

檢查以下網址都能正常開啟：

```text
https://beertaps.tw/robots.txt
https://beertaps.tw/sitemap.xml
https://beertaps.tw/image-sitemap.xml
```

## 2. Google Search Console

1. 開啟 Google Search Console，新增「網域」資源，輸入 `beertaps.tw`。
2. Google 會提供一筆 TXT 驗證值。到 Cloudflare DNS 新增 TXT 紀錄，等待 DNS 生效後回 Search Console 按「驗證」。網域資源會同時涵蓋 `www`、裸網域與不同通訊協定。
3. 若無法修改 DNS，可改用「網址前置字元」資源，再使用 HTML 標記驗證。將標記 `content` 內的 token 填入 Vercel Production 環境變數：

```text
GOOGLE_SITE_VERIFICATION=google提供的token
```

4. 重新部署後，在 Search Console 的「Sitemap」確認以下兩項維持成功：

```text
sitemap.xml
image-sitemap.xml
```

5. 新增重要頁面或文章後，使用「網址審查」測試該網址，確認 Google 可讀取後按「要求建立索引」。
6. 上線後每月或內容大幅更新後檢查「網頁索引」、「搜尋結果成效」與「Core Web Vitals」。提交 Sitemap 是發現提示，不保證立即收錄。

使用「網域」資源與 Cloudflare TXT 驗證時，不需要設定 `GOOGLE_SITE_VERIFICATION`。

## 3. 社群分享圖

- 一般頁面使用固定 1200 × 630 品牌分享圖。
- 專欄文章使用文章照片、黑色蒙板、文章分類、標題與 Beer Taps Logo 動態生成 1200 × 630 分享圖。
- 分享圖使用專案內的 Iansui 與 Overpass 字體，不依賴部署時下載 Google Fonts。
- 正式上線後，可把文章網址貼到 LinkedIn Post Inspector 重新抓取快取；其他平台若仍顯示舊圖，也要使用各平台的分享偵錯工具重新擷取。

## 4. 文章日期與作者

每篇文章資料集中在 `data/blog-posts.ts`，新增文章時需填寫：

```ts
author: "BEER TAPS",
publishedAt: "2026-07-20T09:00:00+08:00",
updatedAt: "2026-07-20T09:00:00+08:00",
```

日期必須與頁面上顯示的日期一致。修改文章內容時只更新 `updatedAt`，不可把 `publishedAt` 改成修改日。

## 5. Google 表單嵌入

在 Google 表單編輯頁按「傳送 > 嵌入 HTML」，取出 `iframe` 的 `src`，格式應為：

```text
https://docs.google.com/forms/d/e/表單ID/viewform?embedded=true
```

不要在 iframe 使用 `forms.gle` 短網址；短網址是分享連結，不是正式嵌入網址。若更換表單，只需更新 `components/contact-content.tsx` 的 `src`。
