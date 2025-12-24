// Real sample questions with explanations
const sampleQuestions = [
    {
        question: "專案經理正在制定專案章程。以下哪項最好地描述了專案發起人的主要角色？",
        options: ["微觀管理專案團隊的日常工作", "以現金或實物形式為專案提供財務資源", "制定專案管理計畫", "解決團隊內部衝突"],
        answer: "以現金或實物形式為專案提供財務資源",
        explanation: "專案發起人(Sponsor)的主要職責是提供資源和支持，包括財務資源，並為專案護航。"
    },
    {
        question: "在執行過程中，一位團隊成員通知專案經理，一個已識別的風險剛剛發生。該風險在風險登記冊中已有應對計畫。專案經理下一步應該做什麼？",
        options: ["執行風險應對計畫", "更新風險登記冊", "通知利害關係人", "實施權變措施"],
        answer: "執行風險應對計畫",
        explanation: "既然風險已識別且有規劃好的應對計畫，當風險發生時，直接執行預定的計畫是最優先的行動。"
    },
    {
        question: "專案經理使用關鍵路徑法來估算專案工期。以下哪項關於關鍵路徑的敘述是正確的？",
        options: ["關鍵路徑是浮動時間最多的路徑", "關鍵路徑總是專案中時間最短的路徑", "關鍵路徑決定了專案的最短可能工期", "專案只能有一條關鍵路徑"],
        answer: "關鍵路徑決定了專案的最短可能工期",
        explanation: "關鍵路徑是網圖中時間最長的路徑，它決定了專案完成所需的最短時間。"
    },
    {
        question: "利害關係人對專案的可交付成果驗收標準有不同意見。為了達成共識，專案經理應該查閱哪份文件？",
        options: ["利害關係人登記冊", "專案章程", "需求追蹤矩陣", "變更日誌"],
        answer: "需求追蹤矩陣",
        explanation: "需求追蹤矩陣連結需求與可交付成果，有助於確認驗收標準的來源與依據。"
    },
    {
        question: "專案團隊剛剛完成且客戶已驗收所有可交付成果。專案經理現在應該執行哪個流程來正式結束專案？",
        options: ["確認範疇", "結束專案或階段", "控制品質", "管理利害關係人參與"],
        answer: "結束專案或階段",
        explanation: "「結束專案或階段」是正式關閉專案、存檔文件並釋放資源的流程。"
    },
    {
        question: "在敏捷專案中，誰負責排定產品待辦清單 (Product Backlog) 的優先順序？",
        options: ["Scrum Master", "開發團隊", "產品負責人 (Product Owner)", "專案經理"],
        answer: "產品負責人 (Product Owner)",
        explanation: "產品負責人負責最大化產品價值，其核心職責之一就是管理並排序 Product Backlog。"
    },
    {
        question: "成本績效指標 (CPI) 為 0.85 表示什麼？",
        options: ["專案進度超前", "專案進度落後", "專案成本低於預算", "專案成本超出預算"],
        answer: "專案成本超出預算",
        explanation: "CPI < 1 表示成本超支。CPI = EV/AC，0.85 意味著每花 1 元只創造 0.85 元的價值。"
    },
    {
        question: "哪一種衝突解決技術被認為是雙贏的，能夠產生最持久的解決方案？",
        options: ["妥協/調解 (Compromise/Reconcile)", "強迫/命令 (Force/Direct)", "合作/解決問題 (Collaborate/Problem Solve)", "緩和/包容 (Smooth/Accommodate)"],
        answer: "合作/解決問題 (Collaborate/Problem Solve)",
        explanation: "合作/解決問題針對衝突根源進行探討，尋求各方都滿意的方案，是唯一視為雙贏的方法。"
    },
    {
        question: "專案經理發現這兩個月來 CPI 和 SPI 均低於 1.0。這代表專案狀況如何？",
        options: ["進度超前且成本低於預算", "進度落後且成本超出預算", "進度超前但成本超出預算", "進度落後但成本低於預算"],
        answer: "進度落後且成本超出預算",
        explanation: "CPI < 1 代表成本超支，SPI < 1 代表進度落後。"
    },
    {
        question: "在規劃品質管理時，專案經理希望識別造成品質問題的根本原因。應該使用哪種工具？",
        options: ["散佈圖", "魚骨圖 (因果圖)", "控制圖", "流程圖"],
        answer: "魚骨圖 (因果圖)",
        explanation: "魚骨圖 (Ishikawa Diagram) 專門用於追溯問題的根本原因 (Root Cause Analysis)。"
    },
    {
        question: "WBS (工作分解結構) 的最低層級稱為什麼？",
        options: ["工作包 (Work Package)", "活動 (Activity)", "里程碑 (Milestone)", "帳戶編碼 (Code of Accounts)"],
        answer: "工作包 (Work Package)",
        explanation: "WBS 分解的最低層級是工作包，可用於估算成本和時程。"
    },
    {
        question: "專案經理收到變更請求。在批准或拒絕變更之前，專案經理首先應該做什麼？",
        options: ["實施變更", "通知發起人", "評估變更的影響", "更新專案計畫"],
        answer: "評估變更的影響",
        explanation: "收到變更請求後，必須先分析其對範疇、時間、成本、品質等的影響，才能決定後續處置。"
    },
    {
        question: "哪一份文件詳細說明了如何定義、監控和控制專案範疇？",
        options: ["範疇基準", "範疇管理計畫", "需求管理計畫", "專案章程"],
        answer: "範疇管理計畫",
        explanation: "範疇管理計畫是專案管理計畫的子計畫，描述將如何定義、制定、監督、控制和確認專案範疇。"
    },
    {
        question: "下列哪項不是「發展團隊」過程的工具與技術？",
        options: ["集中辦公 (Colocation)", "認可與獎勵", "預先分派 (Pre-assignment)", "團隊建立活動"],
        answer: "預先分派 (Pre-assignment)",
        explanation: "預先分派是「獲得資源」流程的技術，而非「發展團隊」。發展團隊關注提升團隊能力與氛圍。"
    },
    {
        question: "RACI 矩陣中的 'A' 代表什麼？",
        options: ["負責 (Accountable)", "執行 (Action)", "協助 (Assist)", "批准 (Approve)"],
        answer: "負責 (Accountable)",
        explanation: "RACI 代表 Responsible, Accountable, Consulted, Informed。Accountable 是指對任務最終結果負全責的人（通常只有一人）。"
    },
    {
        question: "為了確保採購的賣方績效符合合約要求，專案經理應執行哪個流程？",
        options: ["規劃採購管理", "進行採購", "控制採購", "結束採購"],
        answer: "控制採購",
        explanation: "控制採購流程涉及管理採購關係、監督合約績效以及進行必要的變更與修正。"
    },
    {
        question: "下列關於蒙地卡羅分析的敘述，何者正確？",
        options: ["它使用單點估算來計算工期", "它模擬未來可能發生的多種情境來評估風險", "它主要用於品質控制", "它只適用於成本估算"],
        answer: "它模擬未來可能發生的多種情境來評估風險",
        explanation: "蒙地卡羅分析透過大量隨機模擬來計算專案目標（如成本或時程）實現的機率分佈。"
    },
    {
        question: "專案經理正在估算活動持續時間。如果最樂觀時間為 5 天，最悲觀時間為 15 天，最可能時間為 7 天。使用貝他分佈 (PERT) 計算的預期持續時間是多少？",
        options: ["7 天", "8 天", "9 天", "10 天"],
        answer: "8 天",
        explanation: "PERT 公式 = (樂觀 + 4*最可能 + 悲觀) / 6 = (5 + 4*7 + 15) / 6 = (48) / 6 = 8。"
    },
    {
        question: "專案啟動會議 (Kick-off Meeting) 通常在什麼時候舉行？",
        options: ["專案執行階段結束時", "專案規劃階段結束，執行階段開始前", "專案收尾階段", "專案章程簽署前"],
        answer: "專案規劃階段結束，執行階段開始前",
        explanation: "Kick-off meeting 通常在規劃完成後、主要執行工作開始前舉行，目的是凝聚團隊共識與溝通目標。"
    },
    {
        question: "SWOT 分析中，內部且有利的因素稱為什麼？",
        options: ["優勢 (Strengths)", "劣勢 (Weaknesses)", "機會 (Opportunities)", "威脅 (Threats)"],
        answer: "優勢 (Strengths)",
        explanation: "SWOT 分析中，S(優勢)與W(劣勢)屬內部因素；O(機會)與T(威脅)屬外部因素。S 為內部有利因素。"
    }
];

// Generate 300 questions by repeating/modifying the sample set
// In a real app, this would be a database fetch.
export const questions = Array.from({ length: 500 }, (_, i) => {
    const template = sampleQuestions[i % sampleQuestions.length];
    return {
        ...template,
        id: i + 1,
        // Add a variation marker for duplicates to make them distinct in ID/Debugging if needed
        // For user experience, repeating good questions is better than random garbage text.
        question: i < 20 ? template.question : `${template.question} (模擬變體 ${Math.floor(i / 20)})`
    };
});
