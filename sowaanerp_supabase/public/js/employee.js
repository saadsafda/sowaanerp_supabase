

frappe.ui.form.on("Employee", {
    refresh: function (frm) {
        if (frm.doc.user_id) {
            frm.add_custom_button(__("Create Caller User"), function () {
                frappe.call({
                    method: "sowaanerp_caller.api.create_user_and_profile",
                    args: {
                        email: frm.doc.user_id,
                        full_name: frm.doc.employee_name
                    },
                    callback: function (response) {
                        if (response.message) {
                            frappe.msgprint(__("User created successfully."));
                        } else {
                            frappe.msgprint(__("Failed to create user."));
                        }
                    }
                });
            });
        }
    }
});