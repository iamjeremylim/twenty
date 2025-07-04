import { FieldMetadataType } from 'twenty-shared/types';
import { v4 } from 'uuid';

import { FieldMetadataEntity } from 'src/engine/metadata-modules/field-metadata/field-metadata.entity';
import {
  BASE_OBJECT_STANDARD_FIELD_IDS,
  CUSTOM_OBJECT_STANDARD_FIELD_IDS,
} from 'src/engine/workspace-manager/workspace-sync-metadata/constants/standard-field-ids';

export const buildDefaultFieldsForCustomObject = (
  workspaceId: string,
): Partial<FieldMetadataEntity>[] => [
  {
    id: v4(),
    standardId: BASE_OBJECT_STANDARD_FIELD_IDS.id,
    type: FieldMetadataType.UUID,
    name: 'id',
    label: 'Id',
    icon: 'Icon123',
    description: 'Id',
    isNullable: false,
    isActive: true,
    isCustom: false,
    isSystem: true,
    workspaceId,
    defaultValue: 'uuid',
  },
  {
    id: v4(),
    standardId: CUSTOM_OBJECT_STANDARD_FIELD_IDS.name,
    type: FieldMetadataType.TEXT,
    name: 'name',
    label: 'Name',
    icon: 'IconAbc',
    description: 'Name',
    isNullable: false,
    isActive: true,
    isCustom: false,
    workspaceId,
    defaultValue: "'Untitled'",
  },
  {
    id: v4(),
    standardId: BASE_OBJECT_STANDARD_FIELD_IDS.createdAt,
    type: FieldMetadataType.DATE_TIME,
    name: 'createdAt',
    label: 'Creation date',
    icon: 'IconCalendar',
    description: 'Creation date',
    isNullable: false,
    isActive: true,
    isCustom: false,
    workspaceId,
    defaultValue: 'now',
  },
  {
    id: v4(),
    standardId: BASE_OBJECT_STANDARD_FIELD_IDS.updatedAt,
    type: FieldMetadataType.DATE_TIME,
    name: 'updatedAt',
    label: 'Last update',
    icon: 'IconCalendarClock',
    description: 'Last time the record was changed',
    isNullable: false,
    isActive: true,
    isCustom: false,
    isSystem: false,
    workspaceId,
    defaultValue: 'now',
  },
  {
    id: v4(),
    standardId: BASE_OBJECT_STANDARD_FIELD_IDS.deletedAt,
    type: FieldMetadataType.DATE_TIME,
    name: 'deletedAt',
    label: 'Deleted at',
    icon: 'IconCalendarClock',
    description: 'Deletion date',
    isNullable: true,
    isActive: true,
    isCustom: false,
    isSystem: false,
    workspaceId,
    defaultValue: null,
  },
  {
    id: v4(),
    standardId: CUSTOM_OBJECT_STANDARD_FIELD_IDS.createdBy,
    type: FieldMetadataType.ACTOR,
    name: 'createdBy',
    label: 'Created by',
    icon: 'IconCreativeCommonsSa',
    description: 'The creator of the record',
    isNullable: false,
    isActive: true,
    isCustom: false,
    isSystem: false,
    workspaceId,
    defaultValue: { name: "''", source: "'MANUAL'" },
  },
  {
    id: v4(),
    standardId: CUSTOM_OBJECT_STANDARD_FIELD_IDS.position,
    type: FieldMetadataType.POSITION,
    name: 'position',
    label: 'Position',
    icon: 'IconHierarchy2',
    description: 'Position',
    isNullable: false,
    isActive: true,
    isCustom: false,
    isSystem: true,
    workspaceId,
    defaultValue: 0,
  },
];
