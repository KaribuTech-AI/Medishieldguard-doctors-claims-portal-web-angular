export interface DashboardMetric {
  label: string;
  value: string;
  subtitle: string;
  tone?: 'ok' | 'warn' | 'danger' | 'sky' | '';
  route?: string | null;
}

export interface QuickAction {
  label: string;
  route: string;
  icon: string;
}

export interface HomeAlert {
  tone: 'info' | 'urgent';
  icon: string;
  message: string;
  linkLabel: string;
  route: string;
}

export interface RecentClaim {
  title: string;
  meta: string;
  badges: Array<{ label: string; className: string }>;
  amount: string;
  amountTone?: 'ok' | 'warn' | 'danger' | '';
  date: string;
  route?: string | null;
  iconBg: string;
  iconStroke: string;
  iconPath: string;
}

export interface ClaimRow {
  ref: string;
  patient: string;
  diagnosis: string;
  amount: string;
  status: string;
  statusClass: string;
  date: string;
  filter: 'pending' | 'approved' | 'rejected';
  route?: string | null;
}

export interface PaymentDetail {
  label: string;
  value: string;
  tone?: 'primary' | '';
  mono?: boolean;
}

export interface ClaimsTab {
  key: 'all' | 'pending' | 'approved' | 'rejected';
  label: string;
}

export interface SelectOption {
  label: string;
  value: string;
}

export interface BenefitProgress {
  name: string;
  used: string;
  total: string;
  remaining: string;
  width: number;
  tone?: 'med' | 'hi' | '';
}

export interface NotificationItem {
  title: string;
  body: string;
  time: string;
  tone: 'danger' | 'ok' | 'info' | 'warn';
  iconPath: string;
}

export interface NotificationSection {
  title: string;
  items: NotificationItem[];
}

export interface PreauthCard {
  title: string;
  meta: string;
  badges: Array<{ label: string; className: string }>;
  detail: string;
  amountLabel: string;
  amount: string;
  borderTone: 'ok' | 'warn';
  iconTone: 'ok' | 'warn';
  iconPath: string;
}

export interface ChartBar {
  label: string;
  value: string;
  height: number;
  tone?: 'alert' | '';
}

export interface AnalyticsCategory {
  name: string;
  count: string;
  width: number;
  tone?: 'med' | '';
}

export interface IcdPerformance {
  code: string;
  diagnosis: string;
  claims: string;
  totalBilled: string;
  approval: string;
  approvalClass: string;
}

export const homeAlerts: HomeAlert[] = [
  {
    tone: 'info',
    icon: '&#128203;',
    message: '3 claims require attention - 2 pending tariff review, 1 awaiting supporting documents.',
    linkLabel: 'View claims',
    route: 'claims'
  },
  {
    tone: 'urgent',
    icon: '&#9889;',
    message: 'Pre-auth expiring: AUTH-2026-0085 (J. Pillay - Echo + stress test) expires Jun 26.',
    linkLabel: 'View',
    route: 'preauth'
  }
];

export const dashboardMetrics: DashboardMetric[] = [
  { label: 'Claims YTD', value: '86', subtitle: 'R312,400 total' },
  { label: 'Approval rate', value: '94%', subtitle: '81/86 approved', tone: 'ok' },
  { label: 'Pre-auths', value: '2', subtitle: 'Pending approval', tone: 'sky', route: 'preauth' },
  { label: 'Rejections', value: '2', subtitle: 'R4,280 - appeal open', tone: 'danger', route: 'rejections' }
];

export const claimsSummaryMetrics: DashboardMetric[] = [
  { label: 'Total 2026', value: '86', subtitle: 'R312,400 claimed' },
  { label: 'Pending', value: '3', subtitle: 'Under review', tone: 'warn' },
  { label: 'Approved', value: '81', subtitle: 'R286,920 settled', tone: 'ok' },
  { label: 'Rejected', value: '2', subtitle: 'R4,280 declined', tone: 'danger' }
];

export const quickActions: QuickAction[] = [
  {
    label: 'Submit claim',
    route: 'submit',
    icon: '<svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>'
  },
  {
    label: 'Request pre-auth',
    route: 'preauth',
    icon: '<svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>'
  },
  {
    label: 'Patient lookup',
    route: 'patients',
    icon: '<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>'
  },
  {
    label: 'ICD-10 lookup',
    route: 'icd',
    icon: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>'
  },
  {
    label: 'Batch upload',
    route: 'batch',
    icon: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>'
  },
  {
    label: 'New referral',
    route: 'referrals',
    icon: '<svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 014-4h14"/></svg>'
  }
];

export const recentClaims: RecentClaim[] = [
  {
    title: 'N. Khumalo - Cardiology consultation',
    meta: 'CLM-0228 - I48.0 Atrial fibrillation - Apr 8',
    badges: [{ label: 'Under review', className: 'ba' }, { label: 'Specialist', className: 'bb' }],
    amount: 'R1,560',
    amountTone: 'warn',
    date: 'Apr 8',
    route: 'claim-detail',
    iconBg: 'var(--gold-l)',
    iconStroke: 'var(--destructive)',
    iconPath: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>'
  },
  {
    title: 'T. Mokoena - Stress ECG',
    meta: 'CLM-0225 - I25.1 Ischaemic heart - Apr 5',
    badges: [{ label: 'Approved', className: 'bg' }, { label: 'Pre-auth', className: 'bt' }],
    amount: 'R2,840',
    amountTone: 'ok',
    date: 'Apr 5',
    iconBg: 'var(--accent)',
    iconStroke: 'var(--primary)',
    iconPath: '<path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>'
  },
  {
    title: 'L. Dlamini - Follow-up consultation',
    meta: 'CLM-0220 - I10 Essential hypertension - Apr 2',
    badges: [{ label: 'Paid', className: 'bg' }, { label: 'Follow-up', className: 'bb' }],
    amount: 'R680',
    amountTone: 'ok',
    date: 'Apr 2',
    iconBg: 'var(--accent)',
    iconStroke: 'var(--primary)',
    iconPath: '<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>'
  },
  {
    title: 'M. Sithole - Emergency consultation',
    meta: 'CLM-0210 - I47.1 SVT - Mar 26',
    badges: [{ label: 'Rejected', className: 'br' }, { label: 'Non-DSP facility', className: 'bk' }],
    amount: 'R1,860',
    amountTone: 'danger',
    date: 'Mar 26',
    iconBg: 'var(--blush-l)',
    iconStroke: 'var(--destructive)',
    iconPath: '<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>'
  }
];

export const upcomingPayments: PaymentDetail[] = [
  { label: 'Next EFT run', value: 'April 18, 2026' },
  { label: 'Amount due', value: 'R 34,180.00', tone: 'primary' },
  { label: 'Claims included', value: '11 settled claims' },
  { label: 'Bank account', value: 'FNB ••6742', mono: true }
];

export const claimsTabs: ClaimsTab[] = [
  { key: 'all', label: 'All (86)' },
  { key: 'pending', label: 'Pending (3)' },
  { key: 'approved', label: 'Approved (81)' },
  { key: 'rejected', label: 'Rejected (2)' }
];

export const claimsRows: ClaimRow[] = [
  { ref: 'CLM-0228', patient: 'N. Khumalo', diagnosis: 'I48.0 A-fib', amount: 'R1,560', status: 'Under review', statusClass: 'ba', date: 'Apr 8', filter: 'pending', route: 'claim-detail' },
  { ref: 'CLM-0226', patient: 'S. van Wyk', diagnosis: 'I25.9 IHD', amount: 'R3,420', status: 'Docs needed', statusClass: 'ba', date: 'Apr 7', filter: 'pending' },
  { ref: 'CLM-0225', patient: 'T. Mokoena', diagnosis: 'I25.1 Ischaemic', amount: 'R2,840', status: 'Approved', statusClass: 'bg', date: 'Apr 5', filter: 'approved' },
  { ref: 'CLM-0220', patient: 'L. Dlamini', diagnosis: 'I10 HTN', amount: 'R680', status: 'Paid', statusClass: 'bg', date: 'Apr 2', filter: 'approved' },
  { ref: 'CLM-0218', patient: 'J. Pillay', diagnosis: 'I42.0 DCM', amount: 'R4,120', status: 'Paid', statusClass: 'bg', date: 'Mar 30', filter: 'approved' },
  { ref: 'CLM-0215', patient: 'P. Mthembu', diagnosis: 'I48.1 Persistent AF', amount: 'R1,560', status: 'Paid', statusClass: 'bg', date: 'Mar 28', filter: 'approved' },
  { ref: 'CLM-0210', patient: 'M. Sithole', diagnosis: 'I47.1 SVT', amount: 'R1,860', status: 'Rejected', statusClass: 'br', date: 'Mar 26', filter: 'rejected' },
  { ref: 'CLM-0205', patient: 'A. Botha', diagnosis: 'I63.9 CVA', amount: 'R2,420', status: 'Rejected', statusClass: 'br', date: 'Mar 22', filter: 'rejected' }
];

export const submitClaimTypes: SelectOption[] = [
  { label: 'Specialist consultation', value: 'Specialist consultation' },
  { label: 'Procedure / investigation', value: 'Procedure / investigation' },
  { label: 'Follow-up consultation', value: 'Follow-up consultation' },
  { label: 'Emergency consultation', value: 'Emergency consultation' },
  { label: 'In-hospital (s27)', value: 'In-hospital (s27)' }
];

export const dependantOptions: SelectOption[] = [
  { label: 'Main member', value: 'main' },
  { label: 'Dep 1 - Sipho Khumalo (child)', value: 'dep-1' }
];

export const placeOfServiceOptions: SelectOption[] = [
  { label: 'Consulting rooms', value: 'Consulting rooms' },
  { label: 'Hospital - in-patient', value: 'Hospital - in-patient' },
  { label: 'Hospital - out-patient', value: 'Hospital - out-patient' },
  { label: 'Day clinic', value: 'Day clinic' },
  { label: 'Emergency unit', value: 'Emergency unit' }
];

export const patientBenefitBreakdown: BenefitProgress[] = [
  { name: 'In-hospital', used: 'R8,200', total: 'R18,000', remaining: 'R9,800 left', width: 45 },
  { name: 'Out-of-hospital specialist', used: 'R2,040', total: 'R8,000', remaining: 'R5,960 left', width: 26 },
  { name: 'Day-to-day', used: 'R0', total: 'R6,000', remaining: 'R6,000 left', width: 0 }
];

export const patientRecentClaims = [
  { title: 'Cardiology consultation - Apr 8', meta: 'CLM-0228 - I48.0 - R1,560', badge: 'Under review', badgeClass: 'ba' },
  { title: 'Follow-up - Feb 14', meta: 'CLM-0182 - I10 - R680', badge: 'Paid', badgeClass: 'bg' }
];

export const settingsNotificationToggles = [
  { key: 'claimStatus', title: 'Claim status updates', description: 'Email when a claim status changes', enabled: true },
  { key: 'paymentNotifications', title: 'Payment notifications', description: 'Email when EFT payment is processed', enabled: true },
  { key: 'preauthUpdates', title: 'Pre-auth updates', description: 'Email when pre-authorisation requests are approved or declined', enabled: true },
  { key: 'schemeNotices', title: 'Scheme notices', description: 'Tariff updates, formulary changes, and policy announcements', enabled: true },
  { key: 'smsAlerts', title: 'SMS alerts', description: 'Urgent notifications via SMS to 082 ••• 4821', enabled: false }
];

export const settingsIntegrationToggles = [
  { key: 'practiceManagement', title: 'Practice management software', description: 'Sync claims with GoodX / Healthbridge / Medibridge', enabled: false },
  { key: 'accountingIntegration', title: 'Accounting integration', description: 'Auto-export remittance data to Xero / Sage / Pastel', enabled: false }
];

export const settingsClaimTypeOptions: SelectOption[] = [
  { label: 'Specialist consultation', value: 'Specialist consultation' },
  { label: 'Procedure / investigation', value: 'Procedure / investigation' },
  { label: 'Follow-up', value: 'Follow-up' },
  { label: 'Emergency', value: 'Emergency' }
];

export const settingsDateFormatOptions: SelectOption[] = [
  { label: 'DD/MM/YYYY (South African)', value: 'DD/MM/YYYY' },
  { label: 'YYYY-MM-DD (ISO)', value: 'YYYY-MM-DD' }
];

export const settingsSessionOptions: SelectOption[] = [
  { label: '15 minutes', value: '15 minutes' },
  { label: '30 minutes', value: '30 minutes' },
  { label: '60 minutes', value: '60 minutes' }
];

export const notificationSections: NotificationSection[] = [
  {
    title: 'Today',
    items: [
      {
        title: 'CLM-0226 - Supporting documents required',
        body: 'S. van Wyk Holter monitor claim needs clinical motivation letter. Upload within 5 business days.',
        time: '2h ago',
        tone: 'danger',
        iconPath: '<path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>'
      },
      {
        title: 'Pre-auth AUTH-0092 under clinical review',
        body: 'N. Khumalo Holter monitor request is being reviewed by scheme clinical panel. Expected: 1-2 days.',
        time: '4h ago',
        tone: 'ok',
        iconPath: '<path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>'
      },
      {
        title: 'EFT payment processed - R28,640',
        body: 'Remittance for March settlements deposited to FNB ••6742.',
        time: 'Today',
        tone: 'info',
        iconPath: '<rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>'
      }
    ]
  },
  {
    title: 'This week',
    items: [
      {
        title: 'AUTH-0085 expiring in 73 days',
        body: 'J. Pillay Echo + stress test pre-auth expires Jun 26. Schedule procedure or request extension.',
        time: 'Apr 12',
        tone: 'warn',
        iconPath: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'
      },
      {
        title: 'NHRPL 2026 tariff update',
        body: 'Cardiology tariff codes 3652-3668 updated effective April 1, 2026.',
        time: 'Apr 10',
        tone: 'info',
        iconPath: '<path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>'
      }
    ]
  }
];

export const preauthSummaryMetrics: DashboardMetric[] = [
  { label: 'Active', value: '2', subtitle: 'Valid pre-auths', tone: 'ok' },
  { label: 'Pending', value: '1', subtitle: 'Clinical review', tone: 'warn' },
  { label: 'Expired (90d)', value: '3', subtitle: 'Re-request if needed' }
];

export const activePreauths: PreauthCard[] = [
  {
    title: 'T. Mokoena - Cardiac catheterisation',
    meta: 'AUTH-0089 - I25.1 - Approved Apr 4 - Valid until Jul 3',
    badges: [{ label: 'Approved', className: 'bt' }, { label: 'In-hospital', className: 'bb' }],
    detail: 'Milpark Hospital - 2-night stay',
    amountLabel: 'Authorised',
    amount: 'R42,500',
    borderTone: 'ok',
    iconTone: 'ok',
    iconPath: '<path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>'
  },
  {
    title: 'J. Pillay - Echocardiogram + stress test',
    meta: 'AUTH-0085 - I42.0 - Approved Mar 28 - Valid until Jun 26',
    badges: [{ label: 'Approved', className: 'bt' }, { label: 'Procedure', className: 'bb' }],
    detail: 'Out-patient',
    amountLabel: 'Authorised',
    amount: 'R6,800',
    borderTone: 'ok',
    iconTone: 'ok',
    iconPath: '<path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>'
  }
];

export const pendingPreauths: PreauthCard[] = [
  {
    title: 'N. Khumalo - Holter monitor (24hr)',
    meta: 'AUTH-0092 - I48.0 - Submitted Apr 10',
    badges: [{ label: 'Under review', className: 'ba' }, { label: 'Investigation', className: 'bb' }],
    detail: 'Clinical motivation attached',
    amountLabel: 'Requested',
    amount: 'R3,200',
    borderTone: 'warn',
    iconTone: 'warn',
    iconPath: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>'
  }
];

export const analyticsSummaryMetrics: DashboardMetric[] = [
  { label: 'Revenue YTD', value: 'R312,400', subtitle: '↑ 12% vs 2025', tone: 'ok' },
  { label: 'Avg claim value', value: 'R3,633', subtitle: '86 claims' },
  { label: 'Rejection rate', value: '2.3%', subtitle: '2 of 86 claims', tone: 'danger' },
  { label: 'Avg days to pay', value: '3.2', subtitle: 'Business days' }
];

export const analyticsMonthlyBars: ChartBar[] = [
  { label: 'Jan', value: 'R58k', height: 58 },
  { label: 'Feb', value: 'R72k', height: 72 },
  { label: 'Mar', value: 'R86k', height: 86 },
  { label: 'Apr*', value: 'R48k', height: 48, tone: 'alert' }
];

export const analyticsCategories: AnalyticsCategory[] = [
  { name: 'Specialist consultations', count: '42 claims', width: 48 },
  { name: 'Procedures / investigations', count: '28 claims', width: 82 },
  { name: 'Follow-up consultations', count: '12 claims', width: 18 },
  { name: 'Emergency', count: '4 claims', width: 35, tone: 'med' }
];

export const analyticsTopIcdCodes: IcdPerformance[] = [
  { code: 'I10', diagnosis: 'Essential hypertension', claims: '22', totalBilled: 'R42,680', approval: '100%', approvalClass: 'bt' },
  { code: 'I48.0', diagnosis: 'Paroxysmal atrial fibrillation', claims: '18', totalBilled: 'R86,420', approval: '94%', approvalClass: 'bt' },
  { code: 'I25.1', diagnosis: 'Atherosclerotic heart disease', claims: '14', totalBilled: 'R68,940', approval: '93%', approvalClass: 'bt' },
  { code: 'I42.0', diagnosis: 'Dilated cardiomyopathy', claims: '12', totalBilled: 'R52,160', approval: '92%', approvalClass: 'ba' },
  { code: 'I50.0', diagnosis: 'Congestive heart failure', claims: '8', totalBilled: 'R38,200', approval: '100%', approvalClass: 'bt' }
];
