
import { DataType, generateUUID } from "@clinicaltoolkits/type-definitions";
import { getAbbreviatedVariablePlaceholder, getVariablePlaceholder } from "./getPlaceholders";
import { Variable } from "../../types";

// Function to initialize metadata and childVariableKeys if they are not present
export function initializeVariableMetadata(variable: Variable) {
  if (variable.metadata === null || variable.metadata === undefined) {
    variable.metadata = {};
  }

  if (!variable.metadata.childVariableIds) {
    variable.metadata.childVariableIds = [];
  }
}

// Function to create a base variable template
function createBaseVariableTemplate(variable: Variable) {
  return {
    ...variable,
    metadata: { label: variable.metadata?.label },
  };
}

// Function to create the percentile rank variable
export function createPercentileRankVariable(parentVariable: Variable): Variable {
  const childVariableIdToken = parentVariable.idToken.cloneWithChanges({ variableId: `${parentVariable.idToken.variableId}_${DataType.PERCENTILE_RANK}` });

  // Initialize metadata and childVariableKeys
  initializeVariableMetadata(parentVariable);
  const childVariableTemplate = createBaseVariableTemplate(parentVariable);
  parentVariable.metadata?.childVariableIds?.push(childVariableIdToken.id);

  return {
    ...childVariableTemplate,
    idToken: childVariableIdToken,
    fullName: `${parentVariable.fullName} Percentile Rank`,
    abbreviatedName: `${parentVariable.abbreviatedName}_percentile_rank`,
    dataType: DataType.PERCENTILE_RANK,
    metadata: {
      label: `${parentVariable.metadata?.label}`,
      bHidden: parentVariable.metadata?.bHidePercentileRank,
      bOptional: parentVariable.metadata?.bOptional,
      bNormallyDistributed: parentVariable.metadata?.bNormallyDistributed,
      properties: {
        childVariable: {
          parentVariableId: parentVariable.idToken.id,
        },
        sectionSubversion: parentVariable.metadata?.properties?.sectionSubversion,
      },
      placeholder: getVariablePlaceholder(DataType.PERCENTILE_RANK),
      abbreviatedPlaceholder: getAbbreviatedVariablePlaceholder(DataType.PERCENTILE_RANK),
      bChild: true,
    },
  };
}

export function createPercentileRangeVariable(parentVariable: Variable): Variable {
  const childVariableIdToken = parentVariable.idToken.cloneWithChanges({ variableId: `${parentVariable.idToken.variableId}_${DataType.PERCENTILE_RANGE}` });

  // Initialize metadata and childVariableKeys
  initializeVariableMetadata(parentVariable);
  const childVariableTemplate = createBaseVariableTemplate(parentVariable);
  parentVariable.metadata?.childVariableIds?.push(childVariableIdToken.id);

  return {
    ...childVariableTemplate,
    idToken: childVariableIdToken,
    fullName: `${parentVariable.fullName} Percentile Range`,
    abbreviatedName: `${parentVariable.abbreviatedName}_percentile_range`,
    dataType: DataType.PERCENTILE_RANGE,
    metadata: {
      label: `${parentVariable.metadata?.label}`,
      bHidden: parentVariable.metadata?.bHidePercentileRange,
      bOptional: parentVariable.metadata?.bOptional,
      properties: {
        childVariable: {
          parentVariableId: parentVariable.idToken.id,
        },
        sectionSubversion: parentVariable.metadata?.properties?.sectionSubversion,
      },
      placeholder: getVariablePlaceholder(DataType.PERCENTILE_RANGE),
      abbreviatedPlaceholder: getAbbreviatedVariablePlaceholder(DataType.PERCENTILE_RANGE),
      bChild: true,
    },
  };
}

// Function to create the descriptor variable
export function createDescriptorVariable(parentVariable: Variable): Variable {
  const childVariableIdToken = parentVariable.idToken.cloneWithChanges({ variableId: `${parentVariable.idToken.variableId}_${DataType.DESCRIPTOR}` });

  // Initialize metadata and childVariableKeys
  initializeVariableMetadata(parentVariable);
  const childVariableTemplate = createBaseVariableTemplate(parentVariable);
  parentVariable.metadata?.childVariableIds?.push(childVariableIdToken.id);

  return {
    ...childVariableTemplate,
    idToken: childVariableIdToken,
    fullName: `${parentVariable.fullName} Descriptor`,
    abbreviatedName: `${parentVariable.abbreviatedName}_descriptor`,
    dataType: DataType.DESCRIPTOR,
    metadata: {
      label: `${parentVariable.metadata?.label}`,
      bHidden: parentVariable.metadata?.bHideDescriptiveRating,
      bOptional: parentVariable.metadata?.bOptional,
      properties: {
        childVariable: {
          parentVariableId: parentVariable.idToken.id,
        },
        sectionSubversion: parentVariable.metadata?.properties?.sectionSubversion,
      },
      descriptiveRatings: [],
      placeholder: getVariablePlaceholder(DataType.DESCRIPTOR),
      abbreviatedPlaceholder: getAbbreviatedVariablePlaceholder(DataType.DESCRIPTOR),
      bChild: true,
    },
  };
}

export function createPreviousScoreVariable(parentVariable: Variable): Variable {
  const childVariableIdToken = parentVariable.idToken.cloneWithChanges({ variableId: `${parentVariable.idToken.variableId}_previous_score` });

  // Initialize metadata and childVariableKeys
  initializeVariableMetadata(parentVariable);
  const childVariableTemplate = createBaseVariableTemplate(parentVariable);
  parentVariable.metadata?.childVariableIds?.push(childVariableIdToken.id);

  return {
    ...childVariableTemplate,
    idToken: childVariableIdToken,
    fullName: `${parentVariable.fullName} Previous Score`,
    abbreviatedName: `${parentVariable.abbreviatedName}_previous_score`,
    dataType: parentVariable.dataType,
    metadata: {
      label: `${parentVariable.metadata?.label}`,
      bHidden: parentVariable.metadata?.bHidePreviousScore,
      bOptional: parentVariable.metadata?.bOptional,
      properties: {
        childVariable: {
          parentVariableId: parentVariable.idToken.id,
        },
        sectionSubversion: parentVariable.metadata?.properties?.sectionSubversion,
      },
      placeholder: "Previous Score",
      abbreviatedPlaceholder: "Previous Score",
      bChild: true,
    },
  };
}
