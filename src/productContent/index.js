import DisposableCPAPPage from './disposable_cpap'
import DisposableGlovesPage from './disposable-gloves'
import SurgicalMaskPage from './surgical-mask'
import ReusableCPRResuscitationPage from './reusable_cpr_resuscitation'
import InfantTPieceResuscitatorPage from './infant_t_piece_resuscitator'
import DisposableManometerPage from './disposable_manometer'
import LaryngoscopesPage from './laryngoscopes'
import UEScopeVideoLaryngoscopePage from './ue_scope_video_laryngoscope'
import RechargeableAspiratorPage from './rechargeable_aspirator'
import BreathingCircuitsPage from './breathing_circuits'
import HMEFFilterPage from './hmef_filter'
import BVFFilterPage from './bvf_filter'
import CatheterMountPage from './catheter_mount'
import DisposableAirCushionFaceMaskPage from './disposable_air_cushion_face_mask'
import PVCDoubleLumenEndobronchialTubePage from './pvc_double_lumen_endobronchial_tube'
import SiliconeDoubleLumenEndobronchialTubePage from './silicone_double_lumen_endobronchial_tube'
import PvcNasalEndotrachealTubePage from './pvc_nasal_endotracheal_tube'
import PvcOralEndotrachealTubePage from './pvc_oral_endotracheal_tube'
import PvcEndotrachealTubePage from './pvc_endotracheal_tube'
import PvcWireReinforcedEndotrachealTubePage from './pvc_wire_reinforced_endotracheal_tube'
import EndotrachealTubeEvacuationLumenPage from './endotracheal_tube_evacuation_lumen'
import BiteBlockSiliconeReinforcedEndotrachealTubePage from './bite_block_silicone_reinforced_endotracheal_tube'
import SiliconeReinforcedEndotrachealTubePage from './silicone_reinforced_endotracheal_tube'
import AutoInflationEndobronchialBlockerTubePage from './auto_inflation_endobronchial_blocker_tube'
import EndobronchialBlockerTubeWithoutAutoInflationPage from './endobronchial_blocker_tube_without_auto_inflation'
import IntubatingStyletPage from './intubating_stylet'
import OneWaySiliconeLaryngealMaskPage from './one_way_silicone_laryngeal_mask'
import OneWaySteelReinforcedLaryngealMaskPage from './one_way_steel_reinforced_laryngeal_mask'
import NasopharyngealAirwayPage from './nasopharyngeal_airway'
import OropharyngealAirwayPage from './oropharyngeal_airway'
import TrachealTubesHolderPage from './tracheal_tubes_holder'
import DisposableTrachealTubeKitPage from './disposable_tracheal_tube_kit'
import IOBForcedAirWarmingSystemPage from './iob_forced_air_warming_system'
import CBonaClosedSuctionSystemsPage from './c_bona_closed_suction_systems'
import PressureTransducerPage from './pressure_transducer'
import CentralVenousCatheterPage from './central_venous_catheter'
import EasydropFlowRegulatorPage from './easydrop_flow_regulator'
import MoistenedShampooCapPage from './moistened_shampoo_cap'
import WoundAndSkinWashGlovesPage from './wound_and_skin_wash_gloves'
import MedcaptainInfusionPumpPage from './medcaptain_infusion_pump'
import MedcaptainSyringePumpPage from './medcaptain_syringe_pump'
import DisposableEmergencySuturePackPage from './disposable_emergency_suture_pack'
import DisposableCircumcisionPackPage from './disposable_circumcision_pack'
import DisposablePreEpiduralSetPage from './disposable_pre_epidural_set'
import DisposableBasicPackPage from './disposable_basic_pack'
import CannulaCleaningBrushesPage from './cannula_cleaning_brushes'
import TrachealTubeBrushesPage from './tracheal_tube_brushes'
import InstrumentCleaningBrushesPage from './instrument_cleaning_brushes'
import SuctionTubeCleaningBrushesPage from './suction_tube_cleaning_brushes'
import CannulaInstrumentPipeCleanersPage from './cannula_instrument_pipe_cleaners'
import DoubleEndValveBrushesPage from './double_end_valve_brushes'
import SurgicalScrubBrushesDispenserPage from './surgical_scrub_brushes_dispenser'
import LargeInstrumentCleaningBrushPage from './large_instrument_cleaning_brush'
import MedicalBedPatientTransportTrolleyPage from './medical_bed_patient_transport_trolley'
import HospitalCartPage from './hospital_cart'
import HospitalTrolleysPage from './hospital_trolleys'
import PatientRoomItemsPage from './patient_room_items'
import ExaminationRoomItemsPage from './examination_room_items'
import SleeperRehabRockingRecliningChairPage from './sleeper_rehab_rocking_reclining_chair'
import HospitalCurveCurtainTrackingSystemPage from './hospital_curve_curtain_tracking_system'
import JanitorRoomCSSDFurniturePage from './janitor_room_cssd_furniture'
import ThreePlySurgicalFaceMaskPage from './3ply_surgical_face_mask'
import MedicalProtectiveFaceShieldPage from './medical_protective_face_shield'
import InfraredThermometerPage from './infrared_thermometer'
import NonSterileCoverallPage from './non_sterile_coverall'
import SterileCoverallPage from './sterile_coverall'
import MedicalProtectiveHoodCoverPage from './medical_protective_hood_cover'
import CircumcisionUnderwearPage from './circumcision_underwear'
import BootsCoverPage from './boots_cover'
import IsolationGownPage from './isolation_gown'
import CPEApronGownPage from './cpe_apron_gown'
import DisposablePlasticApronPage from './disposable_plastic_apron'

const productContentRegistry = {
  'disposable-cpap-system': DisposableCPAPPage,
  'disposable-gloves': DisposableGlovesPage,
  'surgical-mask': SurgicalMaskPage,
  'reusable-cpr-resuscitation-system': ReusableCPRResuscitationPage,
  'infant-t-piece-resuscitator': InfantTPieceResuscitatorPage,
  'disposable-manometer': DisposableManometerPage,
  'laryngoscopes': LaryngoscopesPage,
  'ue-scope-video-laryngoscope-vl300': UEScopeVideoLaryngoscopePage,
  'asu-200-rechargeable-aspirator': RechargeableAspiratorPage,
  'breathing-circuits': BreathingCircuitsPage,
  'hmef-filter': HMEFFilterPage,
  'bvf-filter': BVFFilterPage,
  'catheter-mount': CatheterMountPage,
  'disposable-air-cushion-face-mask': DisposableAirCushionFaceMaskPage,
  'pvc-double-lumen-endobronchial-tube': PVCDoubleLumenEndobronchialTubePage,
  'silicone-double-lumen-endobronchial-tube': SiliconeDoubleLumenEndobronchialTubePage,
  'pvc-nasal-endotracheal-tube': PvcNasalEndotrachealTubePage,
  'pvc-oral-endotracheal-tube': PvcOralEndotrachealTubePage,
  'pvc-endotracheal-tube': PvcEndotrachealTubePage,
  'pvc-wire-reinforced-endotracheal-tube': PvcWireReinforcedEndotrachealTubePage,
  'endotracheal-tube-evacuation-lumen': EndotrachealTubeEvacuationLumenPage,
  'bite-block-silicone-reinforced-endotracheal-tube': BiteBlockSiliconeReinforcedEndotrachealTubePage,
  'silicone-reinforced-endotracheal-tube': SiliconeReinforcedEndotrachealTubePage,
  'auto-inflation-endobronchial-blocker-tube': AutoInflationEndobronchialBlockerTubePage,
  'endobronchial-blocker-tube-without-auto-inflation': EndobronchialBlockerTubeWithoutAutoInflationPage,
  'intubating-stylet': IntubatingStyletPage,
  'one-way-silicone-laryngeal-mask': OneWaySiliconeLaryngealMaskPage,
  'one-way-steel-reinforced-laryngeal-mask': OneWaySteelReinforcedLaryngealMaskPage,
  'nasopharyngeal-airway': NasopharyngealAirwayPage,
  'oropharyngeal-airway': OropharyngealAirwayPage,
  'tracheal-tubes-holder': TrachealTubesHolderPage,
  'disposable-tracheal-tube-kit': DisposableTrachealTubeKitPage,
  'iob-forced-air-warming-system': IOBForcedAirWarmingSystemPage,
  'c-bona-closed-suction-systems': CBonaClosedSuctionSystemsPage,
  'pressure-transducer': PressureTransducerPage,
  'central-venous-catheter': CentralVenousCatheterPage,
  'easydrop-flow-regulator': EasydropFlowRegulatorPage,
  'moistened-shampoo-cap': MoistenedShampooCapPage,
  'wound-and-skin-wash-gloves': WoundAndSkinWashGlovesPage,
  'medcaptain-infusion-pump': MedcaptainInfusionPumpPage,
  'medcaptain-syringe-pump': MedcaptainSyringePumpPage,
  'disposable-emergency-suture-pack': DisposableEmergencySuturePackPage,
  'disposable-circumcision-pack': DisposableCircumcisionPackPage,
  'disposable-pre-epidural-set': DisposablePreEpiduralSetPage,
  'disposable-basic-pack': DisposableBasicPackPage,
  'cannula-cleaning-brushes': CannulaCleaningBrushesPage,
  'tracheal-tube-brushes': TrachealTubeBrushesPage,
  'instrument-cleaning-brushes': InstrumentCleaningBrushesPage,
  'suction-tube-cleaning-brushes': SuctionTubeCleaningBrushesPage,
  'cannula-instrument-pipe-cleaners': CannulaInstrumentPipeCleanersPage,
  'double-end-valve-brushes': DoubleEndValveBrushesPage,
  'surgical-scrub-brushes-dispenser': SurgicalScrubBrushesDispenserPage,
  'large-instrument-cleaning-brush': LargeInstrumentCleaningBrushPage,
  'medical-bed-patient-transport-trolley': MedicalBedPatientTransportTrolleyPage,
  'hospital-cart': HospitalCartPage,
  'hospital-trolleys': HospitalTrolleysPage,
  'patient-room-items': PatientRoomItemsPage,
  'examination-room-items': ExaminationRoomItemsPage,
  'sleeper-rehab-rocking-reclining-chair': SleeperRehabRockingRecliningChairPage,
  'hospital-curve-curtain-tracking-system': HospitalCurveCurtainTrackingSystemPage,
  'janitor-room-cssd-furniture': JanitorRoomCSSDFurniturePage,
  '3ply-surgical-face-mask': ThreePlySurgicalFaceMaskPage,
  'medical-protective-face-shield': MedicalProtectiveFaceShieldPage,
  'infrared-thermometer': InfraredThermometerPage,
  'non-sterile-coverall': NonSterileCoverallPage,
  'sterile-coverall': SterileCoverallPage,
  'medical-protective-hood-cover': MedicalProtectiveHoodCoverPage,
  'circumcision-underwear': CircumcisionUnderwearPage,
  'boots-cover': BootsCoverPage,
  'isolation-gown': IsolationGownPage,
  'cpe-apron-gown': CPEApronGownPage,
  'disposable-plastic-apron': DisposablePlasticApronPage
}

export default productContentRegistry
