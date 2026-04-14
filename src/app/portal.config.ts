export type ScreenId =
  | 'home'
  | 'analytics'
  | 'notifications'
  | 'claims'
  | 'claim-detail'
  | 'submit'
  | 'claim-success'
  | 'preauth'
  | 'batch'
  | 'batch-detail'
  | 'reversals'
  | 'rejections'
  | 'patients'
  | 'benefits'
  | 'referrals'
  | 'clinical'
  | 'remittance'
  | 'statements'
  | 'payhistory'
  | 'banking'
  | 'tariffs'
  | 'icd'
  | 'formulary'
  | 'guidelines'
  | 'dsp'
  | 'profile'
  | 'users'
  | 'settings'
  | 'support'
  | 'audit';

export interface NavItem {
  id: ScreenId;
  label: string;
  badge?: string;
  badgeClass?: 'nav-badge' | 'nav-badge-teal';
  icon: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const screenTitles: Record<ScreenId, string> = {
  home: 'Dashboard',
  analytics: 'Practice Analytics',
  notifications: 'Notifications',
  claims: 'All Claims',
  'claim-detail': 'Claim Detail',
  submit: 'Submit New Claim',
  'claim-success': 'Claim Submitted',
  preauth: 'Pre-authorisations',
  batch: 'Batch Submissions',
  'batch-detail': 'Batch Detail',
  reversals: 'Reversals & Disputes',
  rejections: 'Rejected Claims',
  patients: 'Patient Lookup',
  benefits: 'Benefit Checks',
  referrals: 'Referrals',
  clinical: 'Clinical Notes',
  remittance: 'Remittance Advice',
  statements: 'Statements',
  payhistory: 'Payment History',
  banking: 'Banking Details',
  tariffs: 'NHRPL Tariffs',
  icd: 'ICD-10 Lookup',
  formulary: 'Formulary & CDL',
  guidelines: 'Clinical Guidelines',
  dsp: 'DSP Network Info',
  profile: 'Practice Profile',
  users: 'Users & Access',
  settings: 'Settings',
  support: 'Provider Support',
  audit: 'Audit Log'
};

export const navSections: NavSection[] = [
  {
    title: 'Overview',
    items: [
      { id: 'home', label: 'Dashboard', icon: '<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>' },
      { id: 'analytics', label: 'Analytics', icon: '<svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>' },
      { id: 'notifications', label: 'Notifications', badge: '5', badgeClass: 'nav-badge', icon: '<svg viewBox="0 0 24 24"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>' }
    ]
  },
  {
    title: 'Claims',
    items: [
      { id: 'claims', label: 'All claims', badge: '3', badgeClass: 'nav-badge', icon: '<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>' },
      { id: 'submit', label: 'Submit new claim', icon: '<svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>' },
      { id: 'preauth', label: 'Pre-authorisations', badge: '2', badgeClass: 'nav-badge-teal', icon: '<svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>' },
      { id: 'batch', label: 'Batch submissions', icon: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>' },
      { id: 'reversals', label: 'Reversals & disputes', icon: '<svg viewBox="0 0 24 24"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/></svg>' },
      { id: 'rejections', label: 'Rejections', badge: '2', badgeClass: 'nav-badge', icon: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>' }
    ]
  },
  {
    title: 'Patients',
    items: [
      { id: 'patients', label: 'Patient lookup', icon: '<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>' },
      { id: 'benefits', label: 'Benefit checks', icon: '<svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>' },
      { id: 'referrals', label: 'Referrals', icon: '<svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 014-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 01-4 4H3"/></svg>' },
      { id: 'clinical', label: 'Clinical notes', icon: '<svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>' }
    ]
  },
  {
    title: 'Payments',
    items: [
      { id: 'remittance', label: 'Remittance advice', icon: '<svg viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>' },
      { id: 'statements', label: 'Statements', icon: '<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>' },
      { id: 'payhistory', label: 'Payment history', icon: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>' },
      { id: 'banking', label: 'Banking details', icon: '<svg viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>' }
    ]
  },
  {
    title: 'Reference',
    items: [
      { id: 'tariffs', label: 'NHRPL tariffs', icon: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>' },
      { id: 'icd', label: 'ICD-10 lookup', icon: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>' },
      { id: 'formulary', label: 'Formulary / CDL', icon: '<svg viewBox="0 0 24 24"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4"/></svg>' },
      { id: 'guidelines', label: 'Clinical guidelines', icon: '<svg viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>' },
      { id: 'dsp', label: 'DSP network info', icon: '<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' }
    ]
  },
  {
    title: 'Account',
    items: [
      { id: 'profile', label: 'Practice profile', icon: '<svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>' },
      { id: 'users', label: 'Users & access', icon: '<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>' },
      { id: 'settings', label: 'Settings', icon: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>' },
      { id: 'support', label: 'Provider support', icon: '<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>' },
      { id: 'audit', label: 'Audit log', icon: '<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' }
    ]
  }
];
