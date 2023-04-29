import { invoke } from '@tauri-apps/api';
import type { ExportFormat, ExportTarget } from '../../shared-types';

export async function exportCookies(
	indexes: number[],
	format: ExportFormat,
	target: ExportTarget
): Promise<void> {
	return await invoke('exportCookies', { indexes, format, target });
}
