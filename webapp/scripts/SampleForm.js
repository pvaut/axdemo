
define([
        "require", "jquery", "_",
        "AXM/AXM",
        "TestPopup1", "TestPopup2"
    ],
    function (
        require, $, _,
        AXM,
        TestPopup1, TestPopup2
    ) {

        var Module = {};

        Module.create = function() {
            var Controls = AXM.Controls;
            var ctrls = Controls.Compound.GroupVert({});

            var bt1 = Controls.Button({
                icon: 'fa-chevron-right',
                text: 'Popup with a form'
            });
            bt1.addNotificationHandler(function() {
                TestPopup1.create();
            });

            var bt2 = Controls.Button({
                icon: 'fa-chevron-right',
                text: 'Fixed size popup'
            });
            bt2.addNotificationHandler(function() {
                TestPopup2.create();
            });
            ctrls.add(Controls.Compound.GroupHor().set([bt1, bt2]));

            var chk1 = Controls.Check({
                text: 'A checkbox'
            });
            chk1.setValue(true);
            ctrls.add(chk1);

            return ctrls;
        };


        return Module;
    });

