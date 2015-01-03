

//Configuration of require.js
require.config({
    baseUrl: "scripts",
    paths: {
        jquery: "AXM/Externals/jquery",
        _:"AXM/Externals/lodash"
        //tween: "Externals/Tween",
        //datastream: "DQX/Externals/DataStream",
        //blob: "DQX/Externals/Blob",
        //filesaver: "DQX/Externals/FileSaver"

    }
});


define([
        "require", "jquery", "_",
        "AXM/AXM",
        "SampleForm", "SampleTable"
    ],
    function (
        require, $, _,
        AXM,
        SampleForm, SampleTable
    ) {


        var theApp = AXM.Application.get();

        var Frame = AXM.Panels.Frame;
        var Controls = AXM.Controls;


        var rootFrame = Frame.FrameSplitterHor();

        var form1 = AXM.Panels.PanelForm.create('p1');



        form1.setRootControl(AXM.Controls.Compound.StandardMargin(SampleForm.create()));

        rootFrame.addMember(Frame.FrameFinal(form1)).setTitle('A title 1');


        var tb1 = rootFrame.addMember(Frame.FrameTabber()).setSizeFraction(2);

        tb1.addMember(SampleTable.create()).setTitle('The first tab');

        tb1.addMember(Frame.FrameFinal(AXM.Panels.PanelForm.create('tb1b'))).setTitle('This is tab B')
            .getPanel().setRootControl(Controls.Static({text: 'This is some content for tab B.'}));
        tb1.addMember(Frame.FrameFinal(AXM.Panels.PanelForm.create('tb1c'))).setTitle('The title of tab C')
            .getPanel().setRootControl(Controls.Static({text: 'This is some content for tab C.'}));


        theApp.setRootFrame(rootFrame);

        theApp.init();

//        rootwindow.setFrameRoot(rootFrame);
        //$('.AXMContainer').html('filled by jquery');
    });

