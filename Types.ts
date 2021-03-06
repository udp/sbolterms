
import { Prefixes } from './Prefixes'

export namespace Types {

    export namespace SBOL2 {
        export const ModuleDefinition:string = Prefixes.sbol2 + 'ModuleDefinition'
        export const ComponentDefinition:string = Prefixes.sbol2 + 'ComponentDefinition'
        export const Module:string = Prefixes.sbol2 + 'Module'
        export const Component:string = Prefixes.sbol2 + 'Component'
        export const Range:string = Prefixes.sbol2 + 'Range'
        export const SequenceAnnotation:string = Prefixes.sbol2 + 'SequenceAnnotation'
        export const SequenceConstraint:string = Prefixes.sbol2 + 'SequenceConstraint'
        export const Interaction:string = Prefixes.sbol2 + 'Interaction'
        export const Participation:string = Prefixes.sbol2 + 'Participation'
        export const Collection:string = Prefixes.sbol2 + 'Collection'
        export const FunctionalComponent:string = Prefixes.sbol2 + 'FunctionalComponent'
        export const Sequence:string = Prefixes.sbol2 + 'Sequence'
        export const MapsTo:string = Prefixes.sbol2 + 'MapsTo'
        export const GenericLocation:string = Prefixes.sbol2 + 'GenericLocation'
    }

    export namespace SBOLX {
        export const Component:string = Prefixes.sbolx + 'Component'
        export const SubComponent:string = Prefixes.sbolx + 'SubComponent'
        export const Range:string = Prefixes.sbolx + 'Range'
        export const SequenceConstraint:string = Prefixes.sbolx + 'SequenceConstraint'
        export const Interaction:string = Prefixes.sbolx + 'Interaction'
        export const Participation:string = Prefixes.sbolx + 'Participation'
        export const Collection:string = Prefixes.sbolx + 'Collection'
        export const Sequence:string = Prefixes.sbolx + 'Sequence'
        export const OrientedLocation:string = Prefixes.sbolx + 'OrientedLocation'
        export const SequenceFeature:string = Prefixes.sbolx + 'SequenceFeature'
    }

    export namespace Visual {

        export const ModuleDepiction:string = Prefixes.visual + 'ModuleDepiction'
        export const ComponentDepiction:string = Prefixes.visual + 'ComponentDepiction'
        export const Glyph:string = Prefixes.visual + 'Glyph'
        export const Label:string = Prefixes.visual + 'Label'

    }

    export namespace SyBiOnt {

        export const Protein:string = Prefixes.sybio + 'Protein'
        export const InduciblePromoter:string = Prefixes.sybio + 'InduciblePromoter'

    }

    export namespace Enrichment {

        export const GeneProduct = Prefixes.enrichment + 'GeneProduct'

    }

}


