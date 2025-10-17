// Copyright (c) 2025, saad and contributors
// For license information, please see license.txt

frappe.ui.form.on('Supabase Settings', {
    refresh(frm) {
        frm.add_custom_button(__('Sync Calls'), function() {
            frappe.call({
                method: 'sowaanerp_supabase.api.sync_calls_to_leads',
                freeze: true,
                freeze_message: __('Syncing calls, please wait...'),
                callback: function(r) {
                    if (!r.exc) {
                        frappe.msgprint(__('Sync completed successfully.'));
                    }
                }
            });
        });
    }
});
