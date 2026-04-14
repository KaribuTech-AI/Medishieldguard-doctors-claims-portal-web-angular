import { Routes } from '@angular/router';
import { screenTitles } from './portal.config';

const AnalyticsScreenComponent = () => import('./screens/analytics/analytics.component').then((m) => m.AnalyticsScreenComponent);
const AuditScreenComponent = () => import('./screens/audit/audit.component').then((m) => m.AuditScreenComponent);
const BankingScreenComponent = () => import('./screens/banking/banking.component').then((m) => m.BankingScreenComponent);
const BatchDetailScreenComponent = () => import('./screens/batch-detail/batch-detail.component').then((m) => m.BatchDetailScreenComponent);
const BatchScreenComponent = () => import('./screens/batch/batch.component').then((m) => m.BatchScreenComponent);
const BenefitsScreenComponent = () => import('./screens/benefits/benefits.component').then((m) => m.BenefitsScreenComponent);
const ClaimDetailScreenComponent = () => import('./screens/claim-detail/claim-detail.component').then((m) => m.ClaimDetailScreenComponent);
const ClaimSuccessScreenComponent = () => import('./screens/claim-success/claim-success.component').then((m) => m.ClaimSuccessScreenComponent);
const ClaimsScreenComponent = () => import('./screens/claims/claims.component').then((m) => m.ClaimsScreenComponent);
const ClinicalScreenComponent = () => import('./screens/clinical/clinical.component').then((m) => m.ClinicalScreenComponent);
const DspScreenComponent = () => import('./screens/dsp/dsp.component').then((m) => m.DspScreenComponent);
const FormularyScreenComponent = () => import('./screens/formulary/formulary.component').then((m) => m.FormularyScreenComponent);
const GuidelinesScreenComponent = () => import('./screens/guidelines/guidelines.component').then((m) => m.GuidelinesScreenComponent);
const HomeScreenComponent = () => import('./screens/home/home.component').then((m) => m.HomeScreenComponent);
const IcdScreenComponent = () => import('./screens/icd/icd.component').then((m) => m.IcdScreenComponent);
const NotificationsScreenComponent = () => import('./screens/notifications/notifications.component').then((m) => m.NotificationsScreenComponent);
const PatientsScreenComponent = () => import('./screens/patients/patients.component').then((m) => m.PatientsScreenComponent);
const PayhistoryScreenComponent = () => import('./screens/payhistory/payhistory.component').then((m) => m.PayhistoryScreenComponent);
const PreauthScreenComponent = () => import('./screens/preauth/preauth.component').then((m) => m.PreauthScreenComponent);
const ProfileScreenComponent = () => import('./screens/profile/profile.component').then((m) => m.ProfileScreenComponent);
const ReferralsScreenComponent = () => import('./screens/referrals/referrals.component').then((m) => m.ReferralsScreenComponent);
const RejectionsScreenComponent = () => import('./screens/rejections/rejections.component').then((m) => m.RejectionsScreenComponent);
const RemittanceScreenComponent = () => import('./screens/remittance/remittance.component').then((m) => m.RemittanceScreenComponent);
const ReversalsScreenComponent = () => import('./screens/reversals/reversals.component').then((m) => m.ReversalsScreenComponent);
const SettingsScreenComponent = () => import('./screens/settings/settings.component').then((m) => m.SettingsScreenComponent);
const StatementsScreenComponent = () => import('./screens/statements/statements.component').then((m) => m.StatementsScreenComponent);
const SubmitScreenComponent = () => import('./screens/submit/submit.component').then((m) => m.SubmitScreenComponent);
const SupportScreenComponent = () => import('./screens/support/support.component').then((m) => m.SupportScreenComponent);
const TariffsScreenComponent = () => import('./screens/tariffs/tariffs.component').then((m) => m.TariffsScreenComponent);
const UsersScreenComponent = () => import('./screens/users/users.component').then((m) => m.UsersScreenComponent);

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'analytics',
    loadComponent: AnalyticsScreenComponent,
    data: { title: screenTitles['analytics'], screenId: 'analytics' }
  },
  {
    path: 'audit',
    loadComponent: AuditScreenComponent,
    data: { title: screenTitles['audit'], screenId: 'audit' }
  },
  {
    path: 'banking',
    loadComponent: BankingScreenComponent,
    data: { title: screenTitles['banking'], screenId: 'banking' }
  },
  {
    path: 'batch-detail',
    loadComponent: BatchDetailScreenComponent,
    data: { title: screenTitles['batch-detail'], screenId: 'batch-detail' }
  },
  {
    path: 'batch',
    loadComponent: BatchScreenComponent,
    data: { title: screenTitles['batch'], screenId: 'batch' }
  },
  {
    path: 'benefits',
    loadComponent: BenefitsScreenComponent,
    data: { title: screenTitles['benefits'], screenId: 'benefits' }
  },
  {
    path: 'claim-detail',
    loadComponent: ClaimDetailScreenComponent,
    data: { title: screenTitles['claim-detail'], screenId: 'claim-detail' }
  },
  {
    path: 'claim-success',
    loadComponent: ClaimSuccessScreenComponent,
    data: { title: screenTitles['claim-success'], screenId: 'claim-success' }
  },
  {
    path: 'claims',
    loadComponent: ClaimsScreenComponent,
    data: { title: screenTitles['claims'], screenId: 'claims' }
  },
  {
    path: 'clinical',
    loadComponent: ClinicalScreenComponent,
    data: { title: screenTitles['clinical'], screenId: 'clinical' }
  },
  {
    path: 'dsp',
    loadComponent: DspScreenComponent,
    data: { title: screenTitles['dsp'], screenId: 'dsp' }
  },
  {
    path: 'formulary',
    loadComponent: FormularyScreenComponent,
    data: { title: screenTitles['formulary'], screenId: 'formulary' }
  },
  {
    path: 'guidelines',
    loadComponent: GuidelinesScreenComponent,
    data: { title: screenTitles['guidelines'], screenId: 'guidelines' }
  },
  {
    path: 'home',
    loadComponent: HomeScreenComponent,
    data: { title: screenTitles['home'], screenId: 'home' }
  },
  {
    path: 'icd',
    loadComponent: IcdScreenComponent,
    data: { title: screenTitles['icd'], screenId: 'icd' }
  },
  {
    path: 'notifications',
    loadComponent: NotificationsScreenComponent,
    data: { title: screenTitles['notifications'], screenId: 'notifications' }
  },
  {
    path: 'patients',
    loadComponent: PatientsScreenComponent,
    data: { title: screenTitles['patients'], screenId: 'patients' }
  },
  {
    path: 'payhistory',
    loadComponent: PayhistoryScreenComponent,
    data: { title: screenTitles['payhistory'], screenId: 'payhistory' }
  },
  {
    path: 'preauth',
    loadComponent: PreauthScreenComponent,
    data: { title: screenTitles['preauth'], screenId: 'preauth' }
  },
  {
    path: 'profile',
    loadComponent: ProfileScreenComponent,
    data: { title: screenTitles['profile'], screenId: 'profile' }
  },
  {
    path: 'referrals',
    loadComponent: ReferralsScreenComponent,
    data: { title: screenTitles['referrals'], screenId: 'referrals' }
  },
  {
    path: 'rejections',
    loadComponent: RejectionsScreenComponent,
    data: { title: screenTitles['rejections'], screenId: 'rejections' }
  },
  {
    path: 'remittance',
    loadComponent: RemittanceScreenComponent,
    data: { title: screenTitles['remittance'], screenId: 'remittance' }
  },
  {
    path: 'reversals',
    loadComponent: ReversalsScreenComponent,
    data: { title: screenTitles['reversals'], screenId: 'reversals' }
  },
  {
    path: 'settings',
    loadComponent: SettingsScreenComponent,
    data: { title: screenTitles['settings'], screenId: 'settings' }
  },
  {
    path: 'statements',
    loadComponent: StatementsScreenComponent,
    data: { title: screenTitles['statements'], screenId: 'statements' }
  },
  {
    path: 'submit',
    loadComponent: SubmitScreenComponent,
    data: { title: screenTitles['submit'], screenId: 'submit' }
  },
  {
    path: 'support',
    loadComponent: SupportScreenComponent,
    data: { title: screenTitles['support'], screenId: 'support' }
  },
  {
    path: 'tariffs',
    loadComponent: TariffsScreenComponent,
    data: { title: screenTitles['tariffs'], screenId: 'tariffs' }
  },
  {
    path: 'users',
    loadComponent: UsersScreenComponent,
    data: { title: screenTitles['users'], screenId: 'users' }
  },
  { path: '**', redirectTo: 'home' }
];
